var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');

var requestHandler = require('./utils/requestHandler');

var app = express();

//Middleware
app.use(express.static(__dirname + '/../app/'));
app.use(favicon(__dirname + '/../app/assets/favicon.ico'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());



//Routes

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/../app/index.html');
});

app.post('/analyzeRecipe', function(req, res) {
  // requestHandler.analyzeRecipe(req.body, function(body) {
  //   res.send(body);
  // });  
  res.sendFile(path.resolve(__dirname + '/../body.example.json'));
});

//Wildcard, not sure if working
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/../app');
});





app.listen(3000);