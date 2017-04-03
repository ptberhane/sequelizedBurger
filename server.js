var express = require('express');
var bodyParser= require("body-parser");
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

var app= express();

var port = 3000;



app.use(express.static(process.cwd() + "/views"));

app.get('/', function (req, res, next) {
  res.render('index');
});

app.use(bodyParser.urlencoded({ extended: false }));



const db = require("./models");
app.get('/burger', function(req, res, next) {
  console.log("Called burgers")

  res.render('burgers');
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(port, function() {
  console.log("Listening on PORT " + port);
});
