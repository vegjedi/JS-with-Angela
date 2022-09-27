const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  var today = new Date();
  var options = {
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  };

  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day
  });
});

app.listen(port, () => {
  console.log("App listening on port 3000")
});