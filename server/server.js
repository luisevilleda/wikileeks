var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var path = require('path');

var db = require('./utils/dbHandler');
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

app.get('/recipes', function(req, res) {
  // res.sendFile(path.resolve(__dirname + '/../body.example.json'));
  db.getAllRecipes(function(data) {
      res.send(data);
  });

});

app.post('/analyzeRecipe', function(req, res) {
  var entry = db.initializeEntry(req.body);
  requestHandler.analyzeRecipe(req.body, function(body) {
    db.addNutrients(entry, body);
    res.send(body);
  });
  // console.log(entry);
  // db.addNutrients(entry, {n:"NUTRIENT WILL GO HERE"});

  // res.sendFile(path.resolve(__dirname + '/../body.example.json'));
});

//Wildcard, not sure if working
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/../app');
});





app.listen(process.env.PORT || 3000);