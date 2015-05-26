// Third party libraries
var express = require('express');
var app = express();

// Environment variables
var port = process.env.PORT || 3000;

// Import data
var urls = require(__dirname + '/data/urls.json');

// Create routes
app.get('/', function(req, res) {
  res.send(200);
});

// Start server
app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});
