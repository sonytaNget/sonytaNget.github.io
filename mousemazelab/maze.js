$(document).ready(function(){


    $('.boundary').hover(function(){
        $(this).css("background-color", "red");
      },
      function(){
        $(this).css("background-color", "blue");
      });
});