// Base Setup


// Call the packages we need

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// This gets the data from a POST

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

// Routes for our API
// get an instance of the express Router

var router = express.Router();

// test router

router.get('/', function(req, res) {
  res.json({ message: "Welcome to our api!"});
});

// more routes will go here

// Register our Routes

// all routes will be prefixed with /api
app.use('/api', router);

// start server

app.listen(port);
console.log("The magic happens on port " + port);

// connecting to Mongoose:

var mongoose = require('mongoose');

mongoose.connect("mongo "mongodb+srv://cluster0-dvkqf.mongodb.net/test" --authenticationDatabase admin --username admin --password notPassword4")
