// Environment variables
var port = process.env.PORT || 3000;
var dir = __dirname;

// Third party libraries
var express = require('express');

// Express server config
var app = express();
var fileName = dir + '/public';
app.use(express.static(fileName));

// Import data
var urls = require(dir + '/data/urls.json');

// Create routes
app.get('/urls', function(req, res) {
  res.json(urls);
});

app.get('/urls/delete', function(req, res) {
  // TODO: delete the url
  res.sendStatus(200);
});

app.get('/urls/create', function(req, res) {
  // TODO: create a url
  res.sendStatus(200);
});

app.get('/urls/update', function(req, res) {
  // TODO: update the url
  res.sendStatus(200);
});

app.get('/', function(req, res) {
  // Use express static file server to serve HTML
  res.sendFile('index.html', { root: fileName });
});

// Start server
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
