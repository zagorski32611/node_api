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
// Routes for API

var router = express.Router();

// middleware for all requests
router.use(function(req, res, next){
  // log stuff
  console.log("Something is happening");
  next(); // Ensures we go to the next route
});

// test route
router.get('/', function(req, res){
  res.json({message: "Welcome to our API"});
});

// ROUTES FOR OUR API
//____________________________________________________________

router.route('/bears')

    // create a bear (accessed at POST http://localhost:8080/api/bears)

    .post(function(req, res) {

      var bear = new Bear();
      bear.name = req.body.name;

      //save bear and check for errors
      bear.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: "Bear created!"});
      });
    });

// Register our Routes

// all routes will be prefixed with /api
app.use('/api', router);

// start server

app.listen(port);
console.log("The magic happens on port " + port);

// connecting to Mongoose:

var mongoose   = require('mongoose');
mongoose.connect('mongodb://ds133776.mlab.com:33776/bears_api');
var Bear     = require('./app/models/bear');
