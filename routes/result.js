var express = require('express');
var html = require('html');
var path = require('path');
var router = express.Router();
/* GET home page. */
router.post('/', async function(req, res, next) {
  //res.sendFile(path.join(__dirname, '..', 'public', 'startseite.html'));
  const { text, number } = req.body;

  var data = {
    "title":"Textgen 0.1",
    "text": null,
    "number": number
  }

  await maketxt(text, number).then( res => { data.text = res} )

  res.render('result', data)
});

function maketxt(str, num){
  return new Promise((res, req) => {
    res( str.trim().concat(" ").repeat(num).trim() )
  })
}

module.exports = router;
