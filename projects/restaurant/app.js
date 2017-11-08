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


//renders home page
app.get('/', function (req, resp) {
  resp.send('restaurant');
});
