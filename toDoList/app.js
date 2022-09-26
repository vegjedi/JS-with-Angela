const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.get("/", function(req, res){
    res.send("hello");
  });

app.listen(port, () => {
    console.log("App listening on port 3000")
  });