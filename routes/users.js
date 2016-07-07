var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('SORRY, USERS NOT FOUND');
});

module.exports = router;
