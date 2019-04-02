/////////////////////
/////RECORD ROOM/////
/////////////////////

////TOGGLE ALBUM RECORD////
$("#record-img").attr("style", "visibility: hide");
$("#album-img").click(function() {
    // $('#record-div').slideToggle("slide");
    $('#record-div').animate({
        width: "toggle"
    })
});

////RECORD SPIN////
// $("#record-img").on("click", function()) {
//     $("#record-img").attr("style", "transform: rotate(7deg)");
// }


////////////////////
//////FURRBASE//////
////////////////////

////FIREBASE CONFIGURATION////
// Global variables

var musicGenre = "";
var userName = "";
//variables to add
    //user name, watcher data(tracker), 




  //Initialize Firebase
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
//

//NAME AND GENRE INFO
var userName = "";
var genre = "";

// Modal control for the name/genre -- may change this later to not be on doc load
$(".header").click(function(){
    $("#bit-modal").modal("show");
});

//Modal information collection (name / genre)
$("#genre-submit").click(function(event){
    event.preventDefault();
    $("#bit-modal").modal("hide"); 

$("#genre-submit").on("click", function(){
    var genreInput = $("#genre-input").val().trim();
    var nameInput = $("#name-input").val().trim();
    musicGenre = genreInput;
    userName = nameInput;
    console.log(musicGenre);
    database.ref("/vinylly").push({
        genre: musicGenre,
        username: userName, });
    genre = $("#genre-input").val().trim();
    userName = $("#name-input").val().trim();
    console.log(userName, genre);
    database.ref("/vinylly").push({
        genre,
        userName,
    });

    $("#name-display").html(`${userName}`);
    $("#genre-display").html(`Current Genre: ${genre}`)

});
});


////SONG INFOMRATION////
var music = {
  popsong: {
    songName: "Talk",
    artist: "Khalid",
    year: "2019",
    album: "Free Spirit",
    length: "03:18"
  
  }
};

////Audio Set-Up////
$(document).ready(function() {
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/audio/Isaac Hayes Walk On By (HQ).mp3")
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





