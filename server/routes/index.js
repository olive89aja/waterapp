const express = require('express');
const router = express.Router();
const Clicks = require('../../models/clicks');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/counter', (req, res, next) => {
  var query = {author: "Noelle"};
  var update = { $inc: { Clicks: 1}, author: "Noelle"};
  var options = {upsert: true, new: true};
  
  Clicks.findOneAndUpdate(query, update, options, function(error, result) {
    if(error) console.log(error);

    console.log(result);
  })
});

router.post('/nick', (req, res, next) => {
  console.log("this got hit",req.body);
  let {author, clicks}=req.body
  var query = {author};
  var update = {clicks};
  var options = {upsert: true, new: true};
  
  Clicks.findOneAndUpdate(query, update, options, function(error, result) {
    if(error) console.log(error);

    res.json({result});

})
})
 
module.exports = router;
