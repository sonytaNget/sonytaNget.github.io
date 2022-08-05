const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'SimpleCalculator.html'));
});

app.post('/add', urlEncodedParser , (req, res) => {

    var valFirst = parseInt(req.body.first);
    var valSecond = parseInt(req.body.second);
    var operation = req.body.opration;
    var result; 
    
    if (operation === 'add') {
        console.log("Sum value");
        result = valFirst + valSecond;
    } else if (operation === 'subtract') {
        result = valFirst - valSecond;
    } else if (operation === 'multiply') {
        result = valFirst * valSecond;
    } else {
        result = valFirst / valSecond;
    }
    res.send(
        `<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
            <title>Calculator Web Site</title> </head>
        <body>
            <p>The answer is: ${String(result)}</p> 
            <a href="http://localhost:8080/">Another calculation</a>
        </body>
        </html> ` 
    );
})

app.listen(8080);

