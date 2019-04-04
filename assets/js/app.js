


////////////////////
//////FURRBASE//////
////////////////////

    //FURRBASE CONFIGURATION
    var config = {
        apiKey: "AIzaSyBjfEbt9pYyYGj6wD_ditzsXsHdRPFtuiI",
        authDomain: "vinylly-376d6.firebaseapp.com",
        databaseURL: "https://vinylly-376d6.firebaseio.com",
        projectId: "vinylly-376d6",
        storageBucket: "vinylly-376d6.appspot.com",
        messagingSenderId: "81895343826"
    };

    firebase.initializeApp(config);
    var database = firebase.database();


    //FURRBASE WATCHER



    //USER INFO VAR
    var userName
    var genre

    //USER INFO MODAL
    $(".header").click(function(){
        $("#bit-modal").modal("show");
    });

    $("#genre-submit").click(function(event){
        event.preventDefault();
        $("#bit-modal").modal("hide"); 
    });

    //USER INFO FURBASE
    $("#genre-submit").on("click", function(){
        genre = $("#genre-input").val().trim();
        userName = $("#name-input").val().trim();
        console.log(`userName is ${userName}; genre is ${genre}`);
        database.ref("/vinylly").push({
            genre,
            userName,
        });

        $("#name-display").text(`${userName}`);
        $("#genre-display").text(`Current Genre: ${genre}`)

    });
//




////////////////////
/////AUDIOPHILE/////
////////////////////


    ////SONG INFORMATION////
    var music = {
        pop: {
            songName: "Talk",
            artist: "Khalid",
            album: "Free Spirit",
            year: "2019",
            length: "03:18",
            mp3Audio: "assets/audio/Khalid-Talk.mp3",
            albumArt: "assets/images/albums/khalid.jpg",
            recordArt: "",
        },
        soul: {
            songName: "Walk On By",
            artist: "Isaac Hayes",
            album: "Hot Buttered Soul",
            year: "1969",
            length: "04:34",
            mp3Audio: "assets/audio/Isaac Hayes Walk On By (HQ).mp3",
            albumArt: "assets/images/albums/hayes.jpg",
            recordArt: "assets/images/records/hayesRecord.png",
        },
        country: {
            songName: "Check Yes or No",
            artist: "George Strait",
            album: "Strait Out of the Box",
            year: "1995",
            length: "03:20",
            mp3Audio: "assets/audio/Check yes or no (George Strait) lyrics.mp3",
            albumArt: "assets/images/albums/strait.jpg",
            recordArt: "assets/images/records/straitRecord.png",
        },
    };

    var genreInput = "";
    var audioElement = "";
    var g = ""
    var s = ""
    var audioElement = "";
    var songLength

    $("#genre-submit").on("click", function(){
        genreInput = $('#genre-input').val();
        g = genreInput
        s = music[g].mp3Audio;
        a = music[g].artist;
        albumArt = music[g].albumArt;
        recordArt = music[g].recordArt;
        songLength = music[g].songLength;


        audioElement = document.createElement("audio");
        audioElement.setAttribute("src", s)
        console.log("this is: "  + g);
        console.log("this is:" + s);

        searchEventsInTown(a);
        albumView(albumArt, recordArt);
        // resetRecord();
    });


    ////Audio Set-Up////
    var resetAlbum = function() {
        console.log ("RESET BITCHES")
        $("#album-img").css("display", "none");
        $("#album-img" ).animate({ "left": "+=600px" }, 1);
    };
    
    var resetRecord = function() {
        $("#record-img").removeClass("record-spin");
        $("#record-img").css("visibility", "hidden");
        $("#needle-img").removeClass("needle-start"); 
        $("#needle-img").removeClass("needle-play"); 
        
    };
    var songStarted = false;

    $("#play-dat").on("click", function(){
        resetAlbum();
        audioElement.play();
        if (songStarted) {
            $("#record-img").addClass("record-spin");
        }
        else {
            songStarted = true;
            $("#record-img").addClass("record-spin");
            $("#needle-img").addClass("needle-start")
            setTimeout(function() {
                $("#needle-img").addClass("needle-play"); 
            }, 1000);
            
        }
    })

    $("#pause-dat").on("click", function(){
        $("#record-img").removeClass("record-spin");
        $("#needle-img").addClass("needle-pause"); 
    })

    $("#stop-dat").on("click", function (){
        audioElement.pause();
        $("#record-img").removeClass("record-spin");
        $("#needle-img").removeClass("needle-start"); 
        $("#needle-img").removeClass("needle-play"); 
    })

    //TOGGLE ALBUM RECORD
    var albumView = function(albumArt, recordArt) {
        $("#album-img").attr("src", albumArt);
        $("#record-img").attr("src", recordArt);
        $("#player-img").fadeTo(500, 0.3);
        $("#needle-img").fadeTo(500, 0.3);
        setTimeout(function() {
            $("#album-img").fadeIn(300)
        }, 1000);
        setTimeout(function() {
            $("#record-img").css("visibility", "visible");
        }, 1400);

        $("#album-img").click(function(){
            $("#album-img" ).animate({ "left": "-=600px" }, 2000);
            $("#record-img").addClass("hvr-grow-record");
            setTimeout(function() {
                $("#record-img").addClass("hvr-shrink-record");
                $("#record-img").removeClass("hvr-grow-record");
                $("#player-img").css("opacity", "1");
                $("#needle-img").css("opacity", "1");
                resetAlbum();
            }, 3000) 
        });

    };






//

////////////////////
///////BIO//////////
////////////////////


// /last fm api
    var searchBandBio = function (bitArtist) {
        // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
        var queryURL = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + bitArtist + "&api_key=0360dba723cbbda37ff3c4ad152aaa0b&format=json";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                fmArtist = $("<h1>").addClass("headerr")
                fmArtist.text(response.artist.name)
                console.log(fmArtist)
                fmSumm = response.artist.bio.summary
                fmdiv = $("<div>").addClass("band-bio-div")
                fmdiv.append(fmArtist, fmSumm)
                $("#band-info").empty()
                $("#band-info").append(fmdiv)
            });
    };




////////////////////
///////EVENT////////
////////

    //global vars for event data for-KENSEY
    var bitEventName
    var bitEventDate
    var spliced
    var format
    var convertedDate
    var bitFinalDate
    var bitVenue
    var bitUpcoming_event
    var bitTix
    var bitCity
    var bitLocation
    var bitReady = false;

    //api call for event data
    
    var searchEventsInTown = function (bitArtist) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL = "https://rest.bandsintown.com/artists/" + bitArtist + "/events?app_id=codingbootcamp";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            bitReady = true;
            bitdiv = $("<div>").addClass("events-in-town")
            // Logging the entire object to console
            console.log(response);
           
            bitEventDate = (response[0].datetime);

            //taking just the date and converting into date format
            spliced = bitEventDate.slice(0, 10);
            console.log(spliced);
            format = "YYYY-MM-DD";
            convertedDate = moment(spliced, format);
            bitFinalDate = convertedDate.format("MM/DD/YY");
            bitVenue = $("<p>").text("Venue: " + response[0].venue.name);
            bitVenue.append("-" + bitFinalDate);

                //venue name, and link to tickets
            bitUpcoming_event = $("<h1>").addClass("headerr");
            bitUpcoming_event.text(bitArtist + "'s Upcoming Event");
            bitTix = $("<a>").attr("href", response[0].url).text("GET TICKETS NOW!!");

            //location of event
            bitCity = response[0].venue.city
            bitState = response[0].venue.region
            bitLocation = $("<p>").text("Location: " +bitCity + ", " + bitState)
            bitdiv.append(bitUpcoming_event, bitVenue, bitLocation, bitTix)
        }); 
    };
   

    $("#event-li").on("click", function() {
        if (bitReady) {
            console.log("bit ready!")
            $("#event-info").empty()
            $("#event-info").append(bitdiv)
        }
        else {
            $("#bit-modal").modal("show");  
        }
    });
//


