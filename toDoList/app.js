const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    var today = new Date();
    if (today.getDay() === 6 || today.getDay() === 0) {
        res.send("Yay it's the weekend!");
    } else {
        res.send("I have to work today...");
    }
  });

app.listen(port, () => {
    console.log("App listening on port 3000")
  });