
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