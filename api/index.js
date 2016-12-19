var express =  require('express');
var mongoose = require('mongoose');
var config = require('./config');
var songs = require('./songs');

var app = express();

// Connect to Mongo database
mongoose.Promise = global.Promise;
mongoose.connect(config.db[app.settings.env], function(err) {
  if(err) {
    return console.log('Mongo connect error... ' + err);
  }
  
  // Make database accessable to API resources
  var db = mongoose.connection;
  app.use(function(req, res, next){
    req.db = db;
    next();
  });

  // List of resources
  app.use('/songs', songs);

  // Start API server
  app.listen(8888, function() {
    console.log('Listening on port 8888');
  });
});

