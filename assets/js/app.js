


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
        genre = genre.toLowerCase();
        userName = $("#name-input").val().trim();
        console.log(`userName is ${userName}; genre is ${genre}`);
        database.ref("/vinylly").push({
            genre,
            userName,
        });

        $("#name-display").text(`${userName}`);
        $("#genre-display").text(`${genre}`)

    });

////////////////////
/////AUDIOPHILE/////
////////////////////

function Song(song, artist, album, genre, year, length, recordArt, albumArt, mp3Audio){
    this.song = song;
    this.artist = artist;
    this.album = album;
    this.genre = genre;
    this.year = year;
    this.length = length;
    this.recordArt = recordArt;
    this.albumArt = albumArt;
    this.mp3Audio = mp3Audio;
}


var songs = [];
    songs.push(new Song('Talk', 'Khalid', 'Free Spirit', 'pop', '2019', '3:18', 'assets/images/records/smithRecord.png', 'assets/images/albums/khalid.jpg', 'assets/audio/Khalid-Talk.mp3'));
    songs.push(new Song('Walk On By', 'Isaac Hayes', 'Hot Buttered Soul', 'soul', '1969', '00:04:34', 'assets/images/records/hayesRecord.png', 'assets/images/albums/hayes.jpg', 'assets/audio/Isaac Hayes Walk On By (HQ).mp3'));
    songs.push(new Song('Check Yes or No', 'George Strait', 'Strait Out of the Box', 'country', '1995', '00:03:20', 'assets/images/records/straitRecord.png', 'assets/images/albums/strait.jpg', 'assets/audio/Check yes or no (George Strait) lyrics.mp3'));
    songs.push(new Song("For What's it Worth", 'Buffalo Springfield', 'Buffalo Springfield', 'rock', '1966', '00:02:40', 'assets/images/records/pinkRecord.png', 'assets/images/albums/Buffalo-Springfield.jpg', 'assets/audio/Buffalo Springfield.mp3'));
    songs.push(new Song("The Thrill is Gone", 'B.B. King', 'Completely Well', 'blues', '1969', '00:05:29', 'assets/images/records/moodyRecord.png','assets/images/albums/B-B-King.jpg', 'assets/audio/The-Thrill-is-Gone.mp3'));
    songs.push(new Song("C.R.E.A.M", 'Wu-Tang Clan', 'Enter the Wu-Tang', 'rap', '1993', '00:04:01', 'assets/images/records/tyedyeRecord.png', 'assets/images/albums/cream.jpg', 'assets/audio/cream.mp3'));
    songs.push(new Song("Electric Relaxation", 'A Tribe Called Quest', 'Midnight Marauders', 'hip-hop', '1993', '00:03:46', 'assets/images/records/xmasRecord.png', 'assets/images/albums/tribe.jpg', 'assets/audio/electric_relaxation.mp3'));
    songs.push(new Song("Pow R. Toc H.", 'Pink Floyd', 'The Piper at the Gates of Dawn', 'psychedelic', '1967', '00:04:26', 'assets/images/records/smithRecord.png', 'assets/images/albums/floyd.jpg', 'assets/audio/Pow R. Toc. H.mp3'));
    songs.push(new Song("Blame It On God", 'Deicide', 'Serpants of the Light', 'metal', '1997', '00:02:44', 'assets/images/records/maroonRecord.png', 'assets/images/albums/deicide.jpg', 'assets/audio/Deicide - Blame it on God(lyrics).mp3'));
    songs.push(new Song("Hummer", 'Smashing Pumpkins', 'Siamese Dream', 'alternative', '1993', '00:06:57', 'assets/images/records/candyRecord.png', 'assets/images/albums/pumpkins.jpg', 'assets/audio/The Smashing Pumpkins - Siamese Dream - Hummer.mp3'));
    songs.push(new Song("Easy Living", 'Billie Holiday', 'Easy Living (Single)', 'jazz', '1937', '00:03:04', 'assets/images/records/purpleRecord.png', 'assets/images/albums/billie.jpg', 'assets/audio/#.mp3')
);

var genreInput = "";
var audioLink = "";
var audioElement;
var albumArt;
var recordArt;
var songLength;
var artist;
var albumName;
var songTitle;

//Something is happening where the genre is selected on document load, before the user even selects anything -- need to figure out how to reset to null on document load
database.ref("/vinylly").on("child_added", function(childSnapshot) {
    if (childSnapshot.child("genre").exists()){
        genreInput = childSnapshot.val().genre;
        var foundSong = songs.find(function(song) {
            return song.genre === genreInput;
        });

<<<<<<< HEAD
        if(foundSong) {
            audioLink = foundSong.mp3Audio;
            audioElement = document.createElement("audio");
            audioElement.setAttribute("src", audioLink);
            artist = foundSong.artist;
            albumArt = foundSong.albumArt;
            recordArt = foundSong.recordArt;
            albumName = foundSong.album;
            songTitle = foundSong.song;
            songLength = moment.duration(foundSong.length).asMilliseconds();
            searchBandBio(artist) 
            searchEventsInTown(artist)

            albumView(albumArt, recordArt);
            if (songStarted === true) {
                resetRecord();
            }
            
        }
        console.log(foundSong);
        console.log("sup " + genreInput)                 
    }
    else {
        //append text of "Please chose a genre that is in our very limited [but fabulous] database"
        $("#bit-modal").modal("show"); 
    }  
});
=======
    ////SONG INFORMATION////
    var music = {
        pop: {
            songName: "Talk",
            artist: "Khalid",
            album: "Free Spirit",
            year: "2019",
            length: "00:03:18",
            mp3Audio: "assets/audio/Khalid-Talk.mp3",
            albumArt: "assets/images/albums/khalid.jpg",
            recordArt: "assets/images/records/smithRecord.png",
        },
        soul: {
            songName: "Walk On By",
            artist: "Isaac Hayes",
            album: "Hot Buttered Soul",
            year: "1969",
            length: "00:04:34",
            mp3Audio: "assets/audio/Isaac Hayes Walk On By (HQ).mp3",
            albumArt: "assets/images/albums/hayes.jpg",
            recordArt: "assets/images/records/hayesRecord.png",
        },
        country: {
            songName: "Check Yes or No",
            artist: "George Strait",
            album: "Strait Out of the Box",
            year: "1995",
            length: "00:03:20",
            mp3Audio: "assets/audio/Check yes or no (George Strait) lyrics.mp3",
            albumArt: "assets/images/albums/strait.jpg",
            recordArt: "assets/images/records/straitRecord.png",
        },

        rock:{
            songName:"For What's it Worth",
            artist: "Buffalo Springfield",
            album : "Buffalo Springfield",
            year: "1966",
            length: "00:02:40",
            mp3Audio:"assets/audio/Buffalo Springfield.mp3",
            albumArt:"assets/images/albums/Buffalo-Springfield.jpg",

        },
        blues:{
            songName:"The Thrill is Gone",
            artist: "B.B. King",
            album:"Completely Well",
            year:"1969",
            length:"00:05:29",
            mp3Audio:"assets/audio/The-Thrill-is-Gone.mp3",
            albumArt:"assets/images/albums/B-B-King.jpg",
        },
        rap:{
            songName:"C.R.E.A.M",
            artist: "Wu-Tang Clan",
            album:"Enter the Wu-Tang",
            year:"1993",
            length:"00:04:01",
            mp3Audio:"assets/audio/cream.mp3",
            albumArt:"assets/images/albums/cream.jpg",
        },
        hip_hop:{
            songName:"Electric Relaxation",
            artist: "A Tribe Called Quest",
            album:"Midnight Marauders",
            year:"1993",
            length: "00:03:46",
            mp3Audio:"assets/audio/electric_relaxation.mp3",
            albumArt:"assets/images/albums/tribe.jpg",
        },
        ragae:{
            songName:"Legalize It",
            artist:"Peter Tosh",
            album:"Legalize It",
            year:"1976",
            length:"00:04:46",
            mp3Audio:"assets/audio/Peter_tosh.mp3",
            albumArt:"assets/images/albums/peter_tosh.jpg"
        
        },
        psychedelic: {
            songName: "Pow R. Toc H.",
            artist: "Pink Floyd",
            album: "The Piper at the Gates of Dawn",
            year: "1967",
            length: "00:04:26",
            mp3Audio: "assets/audio/Pow R. Toc. H.mp3",
            albumArt: "assets/images/albums/floyd.jpg",
            recordArt: "assets/images/records/smithRecord.png",
        },
        metal: {
            songName: "Blame It On God",
            artist: "Deicide",
            album: "Serpants of the Light",
            year: "1997",
            length: "00:02:44",
            mp3Audio: "assets/audio/Deicide - Blame it on God(lyrics).mp3",
            albumArt: "assets/images/albums/deicide.jpg",
            recordArt: "assets/images/records/maroonRecord.png",
        },
        alternative: {
            songName: "Hummer",
            artist: "Smashing Pumpkins",
            album: "Siamese Dream",
            year: "1993",
            length: "00:06:57",
            mp3Audio: "assets/audio/The Smashing Pumpkins - Siamese Dream - Hummer.mp3",
            albumArt: "assets/images/albums/pumpkins.jpg",
            recordArt: "assets/images/records/candyRecord.png",
        },
        jazz: {
            songName: "Easy Living",
            artist: "Billie Holiday",
            album: "Easy Living (Single)",
            year: "1937",
            length: "00:03:04",
            mp3Audio: "assets/audio/#.mp3",
            albumArt: "assets/images/albums/billie.jpg",
            recordArt: "assets/images/records/purpleRecord.png",
        },

    };
    var MillConversion = moment.duration().asMilliseconds();

    var genreInput = "";
    var audioElement = "";
    var g = ""
    var s = ""
    var audioElement = "";
    var songLength;

    $("#genre-submit").on("click", function(){
        genreInput = $('#inputGroupSelect04').val();
        genreInput = $('#genre-input').val();
        g = genreInput;
        s = music[g].mp3Audio;
        a = music[g].artist;
        albumArt = music[g].albumArt;
        recordArt = music[g].recordArt;
        songLength = moment.duration(music[g].length).asMilliseconds();
       
        searchBandBio(a) 
        searchEventsInTown(a)
     
        audioElement = document.createElement("audio");
        audioElement.setAttribute("src", s)
        console.log("this is: "  + g);
        console.log("this is:" + s);
>>>>>>> bdcddeb947c7df6b6c5d22f55b6eb80020fc831d

    

console.log(audioElement)

    ////Audio Set-Up////
    var resetAlbum = function() {
        console.log ("RESET BITCHES")
        $("#album-img").css("display", "none");
        $("#album-img" ).animate({ "left": "+=600px" }, 1);
    };

    var resetRecord = function() {
        $("#record-img").removeClass("record-spin");
        audioElement.pause();
        songStarted = false;
        $("#record-img").css("visibility", "hidden");
        $("#needle-img").removeClass("needle-start"); 
        $("#needle-img").removeClass("needle-play"); 
    };



    var albumInfo = function() {
        var currentArtist = $("<h1").addClass("album-info-div");
        currentArtist.text(`Artist: ${a}`);
        $("#audio-info").append(currentArtist);
    };

    var albumReset = true;
    var songStarted = false;

    $("#play-dat").on("click", function(){
        if (songStarted === false) {
            audioElement.play();
            songStarted = true;
            $("#record-img").addClass("record-spin");
            $("#needle-img").addClass("needle-start")
            setTimeout(function() {
                $("#needle-img").addClass("needle-play"); 
            }, 1000);
        }
    });

    $("#pause-dat").on("click", function(){
        audioElement.pause();
        songStarted = false;
        $("#record-img").removeClass("record-spin");
        $("#needle-img").removeClass("needle-start"); 
        $("#needle-img").removeClass("needle-play"); 
    });


    $("#stop-dat").on("click", function(){
        audioElement.pause();
        songStarted = false;
        $("#record-img").removeClass("record-spin");
        $("#needle-img").removeClass("needle-start"); 
        $("#needle-img").removeClass("needle-play"); 
    });

    $("#eject-dat").on("click", function (){
        audioElement.pause();
        songStarted = false;
        $("#needle-img").removeClass("needle-start"); 
        $("#needle-img").removeClass("needle-play"); 
        $("#album-img").css("display", "inline");
        $("#album-img" ).animate({ "left": "-=750px" }, 2000);
        
        setTimeout(function() {
            resetRecord();
        },2100)
        setTimeout(function() {
            $("#album-img" ).animate({ "left": "+=750px" }, 2000);
        },3000)
        setTimeout(function() {
            genreInput = "";
        }, 3100)
    });


    //TOGGLE ALBUM RECORD
    var albumView = function(albumArt, recordArt) {
        if(albumReset === false) {
            resetAlbum();
            albumReset = true;
        };
        $("#record-img").css("visibility", "hidden");
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
            if (songStarted === false) {
                if (albumReset === true) {
                    $("#album-img" ).animate({ "left": "+=750px" }, 2000);
                    albumReset = false;
                }
                $("#record-img").addClass("hvr-grow-record");
                setTimeout(function() {
                    $("#record-img").addClass("hvr-shrink-record");
                    $("#record-img").removeClass("hvr-grow-record");
                    $("#player-img").css("opacity", "1");
                    $("#needle-img").css("opacity", "1");
                }, 3000) 
            }
        });
    };
    


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
                
                bitReady = true;
<<<<<<< HEAD
                fmArtist = $("<h1>").addClass("headerr")
                fmArtist.text(response.artist.name)
                
                fmSumm = response.artist.bio.summary
                fmdiv = $("<div>").addClass("band-bio-div")
                fmdiv.append(fmArtist, fmSumm)
                $("#band-info").empty()
                $("#band-info").append(fmdiv)
=======
                fmArtist = $("<h1>").addClass("headerr");
                fmArtist.text(response.artist.name);
                console.log(fmArtist);
                fmSumm = response.artist.bio.summary;
                fmdiv = $("<div>").addClass("band-bio-div");
                fmdiv.append(fmArtist, fmSumm);
                $("#band-info").empty();
                $("#band-info").append(fmdiv);
>>>>>>> bdcddeb947c7df6b6c5d22f55b6eb80020fc831d
           
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
            bitdiv = $("<div>").addClass("events-in-town");
            // Logging the entire object to console
            console.log(response.length);
           if(response.length < 1) {
            $("#event-info").empty();
            var error = $("<h1>").text("No Upcoming Events");
            console.log(error)
            $("#event-info").append(error);
           }else{

           
     
           
            bitEventDate = (response[0].datetime);

            //taking just the date and converting into date format
            spliced = bitEventDate.slice(0, 10);
            console.log(spliced);
            format = "YYYY-MM-DD";
            convertedDate = moment(spliced, format);
            bitFinalDate = convertedDate.format("MM/DD/YY");
            bitVenue = $("<p>").text("Venue: " + response[0].venue.name);
            bitDate= $("<p>").text("Date: " + bitFinalDate);

                //venue name, and link to tickets
            bitUpcoming_event = $("<h1>").addClass("headerr");
            bitUpcoming_event.text(bitArtist + "'s Upcoming Event");
            bitTix = $("<a>").attr("href", response[0].url).text("GET TICKETS NOW!!");

            //location of event
            bitCity = response[0].venue.city;
            bitState = response[0].venue.region;
            bitLocation = $("<p>").text("Location: " +bitCity + ", " + bitState);
            bitdiv.append(bitUpcoming_event, bitVenue, bitDate, bitLocation, bitTix);
            $("#event-info").empty();
            $("#event-info").append(bitdiv);
<<<<<<< HEAD
           }
=======
            
>>>>>>> bdcddeb947c7df6b6c5d22f55b6eb80020fc831d
        }); 
    };
   
    //event button//

    $("#event-li").on("click", function() {
        if (bitReady) {
            console.log("bit ready!")
            searchEventsInTown(artist)
            
        }
        else {
            $("#bit-modal").modal("show");  
            
        }
    });


//bio button//
$("#bio-li").on("click", function() {
    if (bitReady) {
        console.log("bit ready!")
        searchBandBio(artist) 
    }
    else  {
        $("#bit-modal").modal("show"); 
         
    }
    
});

$(document).ready($("#bit-modal").modal("show")); 


