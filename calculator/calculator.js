const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    var calResult = Number(req.body.num1) + Number(req.body.num2);
    res.send("Total result is " + calResult);
});

app.listen(port, () => {
  console.log("Calculator app listening on port 3000")
});