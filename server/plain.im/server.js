var express = require('express');
var bodyParser = require('body-parser')

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/api', function (req, res) {
  res.send('Plain IM Server API v0.1.0');
});

app.post('/msg', function (req, res) {
  console.log(req.body.w + ": " + req.body.m);
  res.end();
});

app.listen(8081, function () {
  console.log('Plain IM Server listening on port 8081!');
});
