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
    // Clicks.findOne({ name: 'Olivier' }, function(err, doc) {
    //     if (err) console.log(`ERROR ${err}`);
    //     console.log(doc);
    //     doc.name = 'Olivier';
    //     doc.visits.$inc();
    //       doc.save();
    //     console.log(req.body);
    //     res.send("DB")
    // });
});






// router.post('/counter', (req, res, next) => {
//   var query = {author: "Olivier"};
//   var update = {$inc: { Clicks: 1}, author: "Olivier"};
//   var options = {upsert: true, new: true};
  
//   Clicks.findByIdAndUpdate(query, update, options, function(error, result) {
//     if(error) console.log(error);

//     console.log(result);
//   })



module.exports = router;
