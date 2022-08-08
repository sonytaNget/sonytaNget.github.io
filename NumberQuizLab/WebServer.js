var express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser'); 
const session = require('express-session');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const cookieParser = require('cookie-parser');
const path = require('path');

const helper = require('./Helper');

var app = express();

app.use(cookieParser());

app.use(session({
    secret: 'salt for cookie signing',
    saveUninitialized: true,
    resave: false
}));

app.set("views", path.join(__dirname, "views"));
// set view engine
app.set("view engine",'pug')

app.get('/', function (req, res) {

    if (!req.session.user) {
        req.session.user = {
            index: 0,
            score: 0    
        };
    } 
    console.log("index:  "  , req.session.user.index, "  Score:" , req.session.user.score);

    if (req.session.user.index >= helper.questions.length) {
        res.render('result', { 
            score : req.session.user.score,
            numberOfQuestions : helper.questions.length,
        });
    } else {
        res.render('sample', { 
            score : req.session.user.score,
            questions : helper.questions[req.session.user.index],
        });
    }
    
});

var server = app.listen(5000, function () { 
    console.log('Node server is running..');
});

app.post('/' , urlEncodedParser, (req, res) => {

    var answer = helper.answers[req.session.user.index];
    var userAnswer = parseInt(req.body.answer);

    if (answer == userAnswer) {
        req.session.user.score = parseInt(req.session.user.score) +1;
    }

    req.session.user.index = parseInt(req.session.user.index) + 1;

    res.redirect('/');
})



