var express =  require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var dbName = 'mongo';
var tableName = 'test';

var db;

MongoClient.connect('mongodb://mongo:27017', function(err, database) {
  if(err) {
    return console.log('Mongo connect error... ' + err);
  }
  db = database;

  app.use('/songs', songs);

  app.listen(8888, function() {
    console.log('Listening on port 8888');
  });
});

