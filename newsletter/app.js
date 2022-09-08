const express = require("express");
const bodyParser = require("body-parser");
const https = require("node:https");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
    res.send("Hello World");
});

app.listen(port, function(res){
    console.log("Listening to port 3000");
});