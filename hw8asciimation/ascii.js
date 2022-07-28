// 'esversion: 6';

// window.onload = () => {

//     var textArea, startButton, stopButton, animationSelector, sizeSelector, setTimeOutID, turboChecker;
//     var animationSpeed = 250;
    
//     textArea = document.getElementById("textArea");
//     startButton = document.getElementById("startButton");
//     stopButton = document.getElementById("stopButton");
//     animationSelector = document.getElementById("animation");
//     sizeSelector = document.getElementById("size");
//     turboChecker = document.getElementById("turbo");

//     stopButton.disabled = true;
//     console.log("it is here");

//     // -------- Set Value from Animation -------
//     animationSelector.onchange = () => {
//         console.log(`Selecting ${animationSelector.value}`);
//         textArea.value = ANIMATIONS[animationSelector.value];
//     };

//     sizeSelector.onchange = () => {
//         console.log(`Selecting ${sizeSelector.value}`);
//         textArea.style.fontSize = sizeSelector.value;
//     };

//     turboChecker.onchange = () => {
//         animationSpeed = turboChecker.checked ? 50 : 250;
//         console.log(`Turbo Checking ${turboChecker.checked} speed: ${animationSpeed}`);
//     };

//     startButton.onclick = () => {
//         console.log("starting");
//         stopButton.disabled = false;
//         startButton.disabled = true;
//         animationSelector.disabled = true;

//         let texts = ANIMATIONS[animationSelector.value].split("=====\n");
//         let idx = 0;
        
//         var displayFunction = function() {
//             textArea.value = texts[idx];
//             idx = (idx + 1) % texts.length;
//             setTimeOutID = setTimeout(displayFunction, animationSpeed);
//         };
//         setTimeOutID = setTimeout(displayFunction, animationSpeed);
//     };

//     stopButton.onclick = () => {
//         console.log("stopping");
//         stopButton.disabled = true;
//         startButton.disabled = false;
//         animationSelector.disabled = false;
//         clearTimeout(setTimeOutID);
//         textArea.value = ANIMATIONS[animationSelector.value];
//     };
// };


$(document).ready(function(){

    var timeOutID, selectedAnimation, selectedSize;
    var speedAnimation = 10;
    
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
            speedAnimation = 10;
            console.log("checked");
            console.log(speedAnimation);
            clearInterval(timeOutID);
            timeOutID = setInterval(displayFunction, speedAnimation);
        } else {
            speedAnimation = 500;
            console.log("uncheck");
            console.log(speedAnimation);
            clearInterval(timeOutID);
            timeOutID = setInterval(displayFunction, speedAnimation);
        }
    });
});
