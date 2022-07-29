$(document).ready(function(){

    var timeOutID, selectedAnimation, selectedSize;
    var speedAnimation = 50;
    
    var textArea = document.getElementById("textArea");

    let idx = 0;
        

    function disableButton(button) {
        button.prop("disabled",true);
    }

    function enableButton(button) {
        button.prop("disabled",false);
    }

    disableButton($("#stopButton"));

    function displayFunction() {

        let arrayFrames = ANIMATIONS[selectedAnimation].split("=====\n");
        textArea.value = arrayFrames[idx];
        idx = (idx + 1) % arrayFrames.length;
    }

    $("#startButton").click(function(){

        disableButton($("#startButton"));
        enableButton($("#stopButton"));
        disableButton($("#animation"));

        if (!selectedAnimation) {
            selectedAnimation = "BLANK"
        }
       console.log(selectedAnimation);
        
        timeOutID = setInterval(displayFunction, speedAnimation);
   });

   $("#stopButton").click(function(){

        disableButton($("#stopButton"));
        enableButton($("#startButton"));
        enableButton($("#animation"));
        clearInterval(timeOutID);
        textArea.value = ANIMATIONS[selectedAnimation];
    });

    $("#animation").change(function(){
        selectedAnimation = animation.options[animation.selectedIndex].value;
        console.log(selectedAnimation);
    });

    $("#size").change(function(){
        selectedSize = size.options[size.selectedIndex].value;
        textArea.style.fontSize = selectedSize;
        console.log(selectedSize);
    });

    $("#turbo").click(function(){
        if ($("#turbo").is(':checked')) {
            speedAnimation = 50;
            console.log("checked");
            console.log(speedAnimation);
            clearInterval(timeOutID);
            timeOutID = setInterval(displayFunction, speedAnimation);
        } else {
            speedAnimation = 250;
            console.log("uncheck");
            console.log(speedAnimation);
            clearInterval(timeOutID);
            timeOutID = setInterval(displayFunction, speedAnimation);
        }
    });
});
