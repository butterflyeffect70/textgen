var express = require('express');
var html = require('html');
var path = require('path');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.sendFile(path.join(__dirname, '..', 'public', 'startseite.html'));
  var data = {
    "title":"Textgen 0.1"
  }

  res.render('index', data)
});

module.exports = router;
