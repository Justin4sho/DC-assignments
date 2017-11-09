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


app.get('/addReview', function(req, resp) {
  var id = req.query.id;
  resp.render('addReview.hbs', {title: 'Add Review', id: id});
})

app.post('/addReview', function(req, resp, next) {
  var id = req.body.id;
  var stars = parseInt(req.body.stars);
  var title = req.body.title;
  var review = req.body.review;
  var columns = {
    stars: stars,
    title: title,
    review: review,
    restaurant_id: id
  }
  console.log(columns);
  var q = 'INSERT INTO review \
  VALUES (default, ${stars}, ${title}, ${review}, Null, ${restaurant_id}) RETURNING id';
  db.any(q, columns)
    .then(function (results) {
      resp.redirect('/restaurant/' + id);
    })
  .catch(next);
})

app.get('/restaurant/new', function(req, resp){
  resp.render('addRestaurant.hbs', {title: 'Add a Restaurant'});
});

app.post('/restaurant/submit_new', function(req, resp, next) {
  var name = req.body.name;
  var address = req.body.address;
  var category = req.body.category;
  var columns = {
    name: name,
    address: address,
    category: category,
  }
  var q = 'INSERT INTO restaurant \
  VALUES (default, ${name}, ${address}, ${category}) RETURNING id';
  db.one(q, columns)
    .then(function (results) {
      console.log(results.id);
      resp.redirect('/restaurant/' + results.id);
    })
  .catch(next);
})


app.get('/restaurant/:id',function (req,resp,next) {
  var id = req.params.id;
  var q = 'SELECT restaurant.id as id, restaurant.name, restaurant.address, restaurant.category, \
  review.stars, review.title, review.title, reviewer.rev_name,reviewer.email, reviewer.karma from restaurant \
  LEFT JOIN review ON restaurant.id = review.restaurant_id \
  LEFT JOIN reviewer ON reviewer.id = review.reviewer_id \
  WHERE restaurant.id = $1';
  console.log('My ID is ' +  id);
  db.any(q,id)
    .then(function (results) {
      console.log(results);
      resp.render('restaurant.hbs', {title: 'Restaurant', results: results});
    })
    .catch(next);

});

//starts up server on port 8000
app.listen(8888, function () {
  console.log('Listening on port 8888');
});
