const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname));
app.use(require('./word'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'dict.html'));
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000.`);
});