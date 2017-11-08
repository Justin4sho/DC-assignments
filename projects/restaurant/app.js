var express = require('express');
var app = express();
//import body_parser
const body_parser = require('body-parser');
//import pg-promise
var pgp = require('pg-promise')({});
    // setup db
var db = pgp({database: 'restaurant'});

app.use(body_parser.urlencoded({extended: false}));
// sets up handlbars
app.set('view engine', 'hbs');
app.use(express.static('public'));


//renders home page
app.get('/', function (req, resp) {
  var context = {
    title: 'Restaurant Reviews'
  }
  resp.render('index.hbs',context);
});
//renders search results
app.get('/search', function (req, resp) {
  var searchTerm = req.query.searchTerm;
  var context = {
    title: 'Restaurants'
  }
  resp.render('search_results.hbs',context);

});



//starts up server on port 8000
app.listen(8888, function () {
  console.log('Listening on port 8888');
});
