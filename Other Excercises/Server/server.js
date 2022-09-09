const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World")
  });
  
app.get('/about', (req, res) => {
    res.send("Hello, I'm Minh")
  });

app.get('/hobbies', (req, res) => {
    res.send("I like to meditate and travelling")
  });

app.listen(3000, () => {
    console.log("Server on port 3000")
  });