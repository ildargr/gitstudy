var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('SORRY, USERS NOT FOUND');
  res.render('users',{
    user_title:"Пользователи",
    users_count:"0"
  });
});

module.exports = router;
