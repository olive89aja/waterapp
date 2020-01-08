const express = require('express');
const router = express.Router();
const Clicks = require('../../models/clicks');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/counter', (req, res, next) => {
    Clicks.find().exec((err, Clicks) => {
        if (err) console.log(`ERROR ${err}`);
     
        console.log(req.body);
        res.send("DB")
    });

});





// router.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// });
// const post = new Post({
//   _id:new mongoose.Types.ObjectId(),
//   clicks: req.body,
// })




module.exports = router;
