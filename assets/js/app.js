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
        $("#genre-display").text(`Current Genre: ${genre}`)

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
            console.log(bitBandImage)
            $("#band-info").empty()
            $("#band-info").append(bitBandName, bitBandImage,bitFacebookP, bitHolder)
        });
    };


////////////////////
/////AUDIOPHILE/////
////////////////////


////SONG INFOMRATION////
var music = {
  pop: {
    songName: "Talk",
    artist: "Khalid",
    year: "2019",
    album: "Free Spirit",
    length: "03:18",
    mp3Audio: "assets/audio/Khalid-Talk.mp3"
  },
  soul: {
    songName: "Walk On By",
    artist: "Isaac Hayes",
    year: "1969",
    album: "Hot Buttered Soul",
    length: "04:34",
    mp3Audio: "assets/audio/Isaac Hayes Walk On By (HQ).mp3"
  },
  country: {
    songName: "Check Yes or No",
    artist: "George Strait",
    year: "1995",
    album: "Strait Out of the Box",
    length: "03:20",
    mp3Audio: "assets/audio/Check yes or no (George Strait) lyrics.mp3"
  },
};

var genreIndex = Indexof(genre);


var currentAudio = music[genreIndex].mp3Audio;



////Audio Set-Up////
$(document).ready(function() {
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", currentAudio)
  $(".play-dat").on("click", function(){
    audioElement.play();
    recordPlay();
  })

 $(".pause-dat").on("click", function(){
    audioElement.pause();
    recordPause();

 $(".stop-dat").on("click", function (){
    audioElement.pause();
    recordStop();
  })
});
});

//



