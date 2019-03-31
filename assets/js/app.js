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
//

//NAME AND GENRE INFO
var userName = "";
var genre = "";

//Modal control for the name/genre -- may change this later to not be on doc load
// $(document).ready(function(){
//     $("#bit-modal").modal("show");
// });

//Modal information collection (name / genre)
$("#genre-submit").click(function(event){
    event.preventDefault();
    $("#bit-modal").modal("hide"); 

    genre = $("#genre-input").val().trim();
    userName = $("#name-input").val().trim();
    console.log(userName, genre);
    database.ref("/vinylly").push({
        genre,
        userName,
    });

    $("#name-display").html(`${userName}`);
    $("#genre-display").html(`Current Genre: ${genre}`)

})

//Display current username and genre

//

