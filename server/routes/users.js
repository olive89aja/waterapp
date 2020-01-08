const express = require('express');
const router = express.Router();
const Post = require('../../models/clicks');
const booksController = require("../../controllers/userscontroller");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



// router.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// });

module.exports = router;
