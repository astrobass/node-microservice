var express =  require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var songs = require('./songs');

console.log('Database: ' + config.db[app.settings.env]);

mongoose.connect(config.db[app.settings.env], function(err) {
  if(err) {
    return console.log('Mongo connect error... ' + err);
  }
  var db = mongoose.connection;

  app.use(function(req, res, next){
    req.db = db;
    next();
  });

  app.use('/songs', songs);

  app.listen(8888, function() {
    console.log('Listening on port 8888');
  });
});

