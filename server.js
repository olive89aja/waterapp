
//dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//We are going to need a middleware at some point
var logger = require("morgan");
//This allows us to extract a file name from the file path
var path = require('path');
const routes = require('./server/routes/index');

const Clicks = require('./models/clicks');

//initialize Express app
var express = require("express");
var app = express();



app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.static(path.join(__dirname, 'client/build')));
//connecting to MongoDB

app.use(express.json());

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/waterapp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});


app.get('/counter', (req, res) => {

  db.collection('clicks').find().toArray((err, result) => {
    if (err) return console.log(err);
    res.send(result);
  });
});


//Create localhost port
var port = process.env.PORT || 3001;

app.use('/api', routes);

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});

