/////////////////////
/////RECORD ROOM/////
/////////////////////

    //TOGGLE ALBUM RECORD
    $("#record-img").attr("style", "visibility: hide");
    $("#album-img").click(function() {
        // $('#record-div').slideToggle("slide");
        $('#record-div').animate({
            width: "toggle"
        })
    });

    //RECORD SPIN
    // $("#record-img").on("click", function()) {
    //     $("#record-img").attr("style", "transform: rotate(7deg)");
    // }



    var needleOn = function() {
        $("#needle-img").addClass("needle-move");
    }

    var recordPlay = function() {
        $("#record-img").addClass("record-spin");
    }

    var recordPause = function() {
        $("#record-img").removeClass("record-spin");
    }


//



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
        $("#genre-display").text(`${genre}`)

    });
//


////////////////////
///////BIT API//////
////////////////////

    //Define your variables MF
    var bitBandName
    var bitBandImage
    var bitFacebook
    var bitTourSchedule
    var bitFacebookP
    var bitHolder
    var bitArtist
    
    //api call
    var searchBandsInTown = function(bitArtist) {
        // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
        var queryURL = "https://rest.bandsintown.com/artists/" + bitArtist + "?app_id=codingbootcamp";
        $.ajax({
            url: queryURL,
            method: "GET"
        })
        .then(function(response) {
            // Printing the entire object to console
            console.log(response);
            
            //making html elemnts to store data about artist
            
            bitBandName = $("<h1>").text(response.name);
            bitBandImage = $("<img>").attr("src", response.thumb_url);
            bitFacebook = $("<a>")
            bitFacebook.attr("href", response.facebook_page_url).text("Facebook Page")
            bitFacebookP = $("<p>").append(bitFacebook)
            bitTourSchedule = $("<a>").attr("href", response.url).text("Upcoming events!!")
            bitHolder = $("<p>").append(bitTourSchedule)
            bitbutton = $("<button>").attr("id","clear-band-info")
            bitbutton.text("get rid of dis")
            console.log(bitBandImage)
            $("#band-info").empty()
            $("#band-info").append(bitBandName, bitBandImage,bitFacebookP, bitHolder,bitbutton)
        });
    };
    
    //Remove this once we integrate into other thangs
    searchBandsInTown("kiss")

    //clear band info div
    $("#band-info").on("click", "#clear-band-info", function() {
        $("#band-info").empty()
    });
//


////////////////////
////////BIO/////////
////////////////////

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
//api call for event data
var searchEventsInTown = function (bitArtist) {
   // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
   var queryURL = "https://rest.bandsintown.com/artists/" + bitArtist + "/events?app_id=codingbootcamp";
   $.ajax({
       url: queryURL,
       method: "GET"
   })
       .then(function (response) {
           // Logging the entire object to console
           console.log(response);
           bitEventName = $("<h1>").text(response[0].description)
           bitEventDate = (response[0].datetime)
           //taking just the date and converting into date format
           spliced = bitEventDate.slice(0, 10)
           console.log(spliced)
           format = "YYYY-MM-DD";
           convertedDate = moment(spliced, format);
           bitFinalDate = convertedDate.format("MM/DD/YY")
           bitVenue = $("<p>").text(response[0].venue.name)
           bitVenue.append(" " + bitFinalDate)
        //venue name, and link to tickets
           bitUpcoming_event = $("<h1>").text("Upcoming Event")
           bitTix = $("<a>").attr("href", response[0].url).text("GET TICKETS NOW!!")

           //location of event
           bitCity = response[0].venue.city
           bitState = response[0].venue.region
           bitLocation = $("<p>").text(bitCity + "," + bitState)
           $("#event-info").empty()
           $("#event-info").append(bitUpcoming_event, bitEventName, bitVenue,bitLocation, bitTix)

       });
};
//

////////////////////
///RETRIEVING FB////
////////////////////
var genreInput = "";
database.ref().on("child_added", function(snapshot) {
    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().genre);
    // Change the HTML to reflect
    
    genreInput = $("#genre-display").text(snapshot.val().genre);
    console.log("hey" + genreInput)

    // Handle the errors
  }, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
  });

////////////////////
/////AUDIOPHILE/////
////////////////////



////SONG INFOMRATION////
var music = {
  pop: {
    songName: "Talk",
    artist: "Khalid",
    album: "Free Spirit",
    year: "2019",
    length: "03:18",
    mp3Audio: "assets/audio/Khalid-Talk.mp3"
  },
  soul: {
    songName: "Walk On By",
    artist: "Isaac Hayes",
    album: "Hot Buttered Soul",
    year: "1969",
    length: "04:34",
    mp3Audio: "assets/audio/Isaac Hayes Walk On By (HQ).mp3"
  },
  country: {
    songName: "Check Yes or No",
    artist: "George Strait",
    album: "Strait Out of the Box",
    year: "1995",
    length: "03:20",
    mp3Audio: "assets/audio/Check yes or no (George Strait) lyrics.mp3"
  },
};


var audioElement = "";
var g = ""
var s = ""
var audioElement = "";
$("#genre-display").on("click", function(){
    g = genreInput
    console.log("this is" + g);
    s = music[g].mp3Audio;
    audioElement = document.createElement("audio");
    audioElement.setAttribute("src", s)
    console.log("this is: "  + g);
    console.log("this is:" + s);
    
});


////Audio Set-Up////
  $("#play-dat").on("click", function(){
    audioElement.play();
    recordPlay();
  })

 $("#pause-dat").on("click", function(){
    audioElement.pause();
    recordPause();
 })

 $("#stop-dat").on("click", function (){
    audioElement.pause();
    recordStop();
  })


//



