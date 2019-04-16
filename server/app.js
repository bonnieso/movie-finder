var express = require('express');
var cors = require("cors");
var request = require('request');
var app = express();

var apiKey = process.env.APIKEY;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res, next) {
  request('https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + '&language=en-US&sort_by=popularity.desc&page=1')
  .on('error', function(err) {
    console.error(err)
  })
  .pipe(res);
});

app.get('/search/:keyword', function(req, res, next) {
  var keyword = req.params.keyword;
  request('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=en-US&query='+ keyword +'&page=1')
  .on('error', function(err) {
    console.error(err)
  })
  .pipe(res);
});


module.exports = app;
