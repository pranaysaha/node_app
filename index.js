var express = require('express');

// Constants
var PORT = 8080;

// App
var app = express();
app.get('/', function (req, res){
  res.send('Sample app with Distelli & Docker & Jenkins!');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
