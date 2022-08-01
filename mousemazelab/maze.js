$(document).ready(function(){

    var hitAnyWall = false;
    var start = false;

    $('.boundary').mouseover(function(){
      if (start === true) {
        $(".boundary").css("background-color", "");
        $(".boundary").addClass("youlose");
        $("#status").text("Sorry, you lost :(");
        hitAnyWall = true;
      }
    });

    $("#maze").mouseleave(function(){
      
      if (start === true) {
        $("#status").text("Sorry, you lost :(");
      }
    });

    $("#start").click(function(){

      start = true;
      hitAnyWall = false;
      $("#status").text("Click the " + "\"S\"" + " to begin.");
      $(".boundary").css("background-color", "#eeeeee");
    }); 

    $("#end").mouseover(function(){

      console.log(start);
      if (start === true && hitAnyWall === false) {
        $("#status").text("You win :D");
        hitAnyWall = false;
        start = false;
      }
    }); 
});