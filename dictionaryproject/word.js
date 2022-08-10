const database = require("./DBConnection/db");
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
router.use(express.json());
router.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
router.use(express.urlencoded({extended: true}));


//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
    next();
});


router.post("/translate", function (req, res) {

    database.conn.query('SELECT * FROM entries where word = ' + mysql.escape(req.body.word), 
        function(err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.send({ payload : result}) 
        }
    )
})



module.exports = router;
