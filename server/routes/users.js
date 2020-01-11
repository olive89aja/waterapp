const express = require('express');
const router = express.Router();
const clicks = require('../../models/clicks');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

// router.post('/', function (req, res) {
//   res.send('POST request to the homepage')
// });

module.exports = router;
