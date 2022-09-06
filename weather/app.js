const express = require("express");
const https = require("https");
  
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    const url = "https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=6b6a817d74f2f9a04b1c87f61f227ed9&units=metric";
    https.get(url, function(response) {
      console.log(response.statusCode);
    });
  });

app.listen(port, function() {
  console.log("Server is running on port 3000")
  });