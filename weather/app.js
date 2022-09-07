const express = require("express");
const https = require("node:https");
  
const app = express();
const port = 3000;

app.get("/", function(req, res){
    // res.sendFile(__dirname + "/index.html");
    const url = "https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=6b6a817d74f2f9a04b1c87f61f227ed9&units=metric";
    https.get(url, function(response) {
      console.log(response.statusCode);
      response.on('data', function(data) {
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const temp = weatherData.main.temp;
        const des = weatherData.weather[0].description;
        const icon = weatherData.weather[0].icon
        res.write("<h1>Vancouver weather is " + temp + " degree Celcius.<h1>");
        res.write("<p> And it is " + des + "<p>");
        res.write("<img src=" + "http://openweathermap.org/img/wn/" + icon + "@2x.png>");
        res.send()
      });
    });
  });

app.listen(port, function() {
  console.log("Server is running on port 3000")
  });