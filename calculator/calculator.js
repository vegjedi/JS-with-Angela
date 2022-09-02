const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    res.send(num1)
});

app.listen(port, () => {
  console.log("Calculator app listening on port 3000")
});