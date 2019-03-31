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


//api call
searchBandsInTown("kiss")
function searchBandsInTown(artist) {
  // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
  var queryURL = "https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);

    //making html elemnts to store data about artist

    var bitBandName = $("<h1>").text(response.name);
    var bitBandImage = $("<img>").attr("src", response.thumb_url);
    var bitFacebook = $("<a>")
    bitFacebook.attr("href", response.facebook_page_url).text("Facebook Page")
    var bitTourSchedule = $("<a>").attr("href", response.url).text("Upcoming events!!")
    var bitFacebookP = $("<p>").append(bitFacebook)
    var bitHolder = $("<p>").append(bitTourSchedule)
    console.log(bitBandImage)
    $("#band-info").empty()
    $("#band-info").append(bitBandName, bitBandImage,bitFacebookP, bitHolder)
  });
}
