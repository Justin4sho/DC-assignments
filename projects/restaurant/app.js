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
app.get('/search', function (req, resp, next) {
  var searchTerm = req.query.searchTerm;
  var q = "SELECT * from restaurant \
  WHERE name ILIKE '%$1#%'"
  db.any(q, searchTerm)
    .then(function(results) {
      resp.render('search_results.hbs', {
        title:'Search Results',
        results: results
      });
      console.log(results);
    })
    .catch(next);
});

app.get('/restaurant/:id',function (req,resp,next) {
  var  i_d = req.params.id;
  var q = 'SELECT * from restaurant \
  WHERE id = $1';
  db.one(q,i_d)
    .then(function (results) {
      console.log(results);
      resp.render('restaurant.hbs', {title: 'Restaurant', results: results});
    })
    .catch(function(err) {
      resp.redirect('/');
    };

})



//starts up server on port 8000
app.listen(8888, function () {
  console.log('Listening on port 8888');
});
