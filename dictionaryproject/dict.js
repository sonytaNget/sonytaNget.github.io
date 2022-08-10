"use strict";

$(document).ready(function () {
    $("#loader").hide();
    $("#fetch").on('click', function (e) {
        e.preventDefault();
        $("#loader").show();
        var inputText = $('#wordToTrans').val();
        if (inputText === "") {
            alert('Please input any word to look up!');
        } else {
            $.ajax({
                type: 'POST',
                contentType: "application/json",
                url: '/translate',
                data: JSON.stringify({word: inputText}),
                dataType: 'json'
            })
                .done(function (data) {
                    if (data.payload.length === 0) {
                        $('#defList').empty()
                        $('#noData').empty()
                        $('#noData').append("Not exist").show()
                    } else {
                        $('#noData').hide()
                        var list = $('#defList')
                        list.empty()
                        for (var i = 0; i < data.payload.length; i++) {
                            list.append($('<li id="item">').append(data.payload[i].word + " (" + data.payload[i].wordtype + ")  ::" + data.payload[i].definition));
                        }
                    }
                }).always(function (){
                    $("#loader").hide();
            });
        }
        
    });
});
