
////TOGGLE ALBUM RECORD////
$("#record-img").attr("style", "visibility: hide");
$("#album-img").click(function() {
    // $('#record-div').slideToggle("slide");
    $('#record-div').animate({
        width: "toggle"
    })
});

//Need to figure out what this actually does
// $('.modal-btn').on('shown.bs.modal', function () {
//     $('#myInput').trigger('focus')
//   })
// $("#record-img").attr("style", "visibility: hide");
// $("#album-img").click(function() {
//     // $('#record-div').slideToggle("slide");
//     $('#record-div').
// });




////FIREBASE CONFIGURATION////
// Global variables

var musicGenre = "";
//variables to add
    //user name, watcher data(tracker), 

;


  //Initialize Firebase
var config = {
    apiKey: "AIzaSyBjfEbt9pYyYGj6wD_ditzsXsHdRPFtuiI",
    authDomain: "vinylly-376d6.firebaseapp.com",
    databaseURL: "https://vinylly-376d6.firebaseio.com",
    projectId: "vinylly-376d6",
    storageBucket: "vinylly-376d6.appspot.com",
    messagingSenderId: "81895343826"
  };

firebase.initializeApp(config);

  // Assign the reference to the database to a variable named 'database'
var database = firebase.database();

$("#genre-submit").on("click", function(){
    var genreInput = $("#music-genre").val().trim();
    musicGenre = genreInput;
    console.log(musicGenre);
    database.ref("/vinylly").push({
        genre: musicGenre,
    });
})
