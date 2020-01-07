const express = require('express');
const router = express.Router();
const Post = require('./../../models/post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/counter', (req, res, next) => {
    Post.find().exec((err, posts) => {
        if (err) console.log(`ERROR ${err}`);
        // res.render('counter', { posts: posts });

        console.log(res);
        res.send("all good")
    });

});

// router.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// });

module.exports = router;


module.exports = router;
