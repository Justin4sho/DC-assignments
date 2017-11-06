// Hello World
//
// Make an express program that will display "Hello, world!" at the root URL: /
// ----------------------------------
// Routes
//
// Add to your program the following pages:
//
// "Meow" at the URL /cats
// "Woof" at the URL /dogs
// "Living together" at the URL /cats_and_dogs
// ----------------------------------

// Route Parameters
//
// Adding to the same program, say a greeting to the user, given that the user's name is encoded inside the URL. For example, if you go to the URL
//
// /greet/Kennedy it should say "Hello, Kennedy!"
// /greet/Jamison it should say "Hello, Jamison!"
// /greet/Manny it should say "Hello, Manny!"
// etc...
// ----------------------------------
// Templates 2
//
// Create this array in your server program:
//
// var animals = [
//   { name: 'cats', favorite: true },
//   { name: 'dogs', favorite: true },
//   { name: 'tree frogs', favorite: true },
//   { name: 'earth worms', favorite: false },
//   { name: 'guinea pigs', favorite: true },
// ];
// Feel free to change to match your current state of mind.
//
// Create a page at the URL /fav_animals that will render an ordered list of those animals which are your favorite.
// ----------------------------------


var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');



app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.get('/cats', function (request, response) {
  response.send('Meow');
})

app.get('/dogs', function (request, response) {
  response.send('Woof');
})

app.get('/cats_and_dogs', function(request, response) {
  response.send('Living Together');
})

app.get('/greet/:name', function(request, response) {
  var name = request.params.name;
  var age = parseInt(request.query.age) || 25
  var year = 2017 - age;
  var context = {name: name, year: year};
  response.render('hello.hbs', context);
})

app.get('/hello', function(request,response) {
  var age = parseInt(request.query.age) || 25;
  var year = 2017 - age;
  response.send('You were born in ' + year + '.');
})

app.get('/fav_animals', function(request, response) {
  // var name = request.query.name || 'Name ??';
  var animals = [
    { name: 'cats', favorite: true },
    { name: 'dogs', favorite: true },
    { name: 'tree frogs', favorite: true },
    { name: 'earth worms', favorite: false },
    { name: 'guinea pigs', favorite: true },
  ];
  var context = {
    title: 'Favorite Animals',
    animals: animals,
  }
  response.render('fav.hbs', context);
})

app.listen(8000, function () {
  console.log('Listening on port 8000');
});
