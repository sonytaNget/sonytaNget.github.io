$(document).ready(function(){
    // $("div h1").css("background-color", "red");
    // $("p").append(document
    //     .createTextNode(" YES"));
});

window.onload = function() {

    var btnClickMeElement = document.getElementById("btnClick");
    btnClickMeElement.onclick = alertAnswer;

    function alertAnswer() {
        alert("$(\"div h1\").css(\"background-color\", \"red\");");
    }

}