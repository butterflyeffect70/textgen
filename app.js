var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var index = require('./routes/index');
var result = require('./routes/result');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/result', result);


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
