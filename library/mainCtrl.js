var express = require('express');
var fs = require('fs');
var app = express();
var calculatorHome = fs.readFileSync('./public/calculator.html', "utf8");

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.redirect('calculatorHome')
});

module.exports = app;
