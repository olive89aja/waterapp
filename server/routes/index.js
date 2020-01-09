const express = require('express');
const router = express.Router();
const Clicks = require('../../models/clicks');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/counter', (req, res, next) => {
  var query = {author: "Olivier"};
  var update = { $inc: { Clicks: 1}, author: "Olivier"};
  var options = {upsert: true, new: true};
  
  Clicks.findOneAndUpdate(query, update, options, function(error, result) {
    if(error) console.log(error);

    console.log(result);
  })
 
});


module.exports = router;
