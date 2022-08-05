var express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser'); 
const parseurl = require('parseurl');
const session = require('express-session');
const urlEncodedParser = bodyParser.urlencoded({extended: false});
const cookieParser = require('cookie-parser');

const helper = require('./Helper');

var app = express();

app.use(cookieParser());

app.use(session({
    secret: 'salt for cookie signing',
    saveUninitialized: true,
    resave: false
}));

// set view engine
app.set("view engine",'pug')

app.use(function(req, res, next) {

    if (!req.session.user) {
        req.session.user = {
            id : 1, 
            index: 0,
            score: 0    
        };
    } else {
        var id = parseInt(req.session.user.id) + 1;
        req.session.user.id = id;
        req.session.user.index = 0;
        req.session.user.score = 0;
    }
    next();
});

app.get('/', function (req, res) {

    console.log("ID: " , req.session.user.id, "index:  "  , req.session.user.index, "  Score:" , req.session.user.score);
    res.render('sample', {  // sends HTML version of sample.pug to Browser
        score : req.session.user.score,
        questions : helper.questions[req.session.user.index],         
    }); 
});

var server = app.listen(5000, function () { 
    console.log('Node server is running..');
});

app.post('/' , urlEncodedParser, (req, res) => {

    console.log("ID: " , req.session.user.id, "index:  "  , req.session.user.index, "  Score:" , req.session.user.score);
    var answer = helper.answers[req.session.user.index];
    var userAnswer = parseInt(req.body.answer);

    if (answer == userAnswer) {
        req.session.user.score = parseInt(req.session.user.score) +1;
    }

    req.session.user.index = parseInt(req.session.user.index) + 1;

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
})