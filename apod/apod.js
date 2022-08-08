$(document).ready(

    function () {
        $("#view_button").click(getPicture); 
 });

    function getPicture () {

        const date = $("#date").val();  
        const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + date;    
        
        const postsPromise = fetch(url); // return Promise

        postsPromise.then(data => { 
            return data.json();
        }).then( myData => {
            $("#pic").attr("src", myData.url),
            $('#title').html(myData.title);
        }) // After data received
        .catch(err => { console.error(err); }) // in case rejected 

    };
        