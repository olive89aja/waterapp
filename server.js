

//dependencies
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//We are going to need a middleware at some point
var logger = require("morgan");
//This allows us to extract a file name from the file path
var path = require('path');

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
//mongoose.connect("mongodb://localhost/scraped_news");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/mongoscrap";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("Connected to Mongoose!");
});


//Create localhost port
var port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log("Listening on PORT " + port);
});














