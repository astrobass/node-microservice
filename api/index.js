var express =  require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;

var dbName = 'mongo';
var tableName = 'test';

var db;

app.get('/', function(req, res) {
  db.collection(tableName).find().toArray(function(err, results) {
    console.log(results);
    res.send(results);
  });
});

app.post('/', function(req, res) {
	db.collection(tableName).save(req.body, function(req, res) {
		if(err) {
			return console.log('Error saving...');
		}
	});
});

MongoClient.connect('mongodb://localhost:27017/'+dbName, function(err, database) {
  if(err) {
    console.log('Mongo connect error... ' + err);
  }
  db = database;
  
  app.listen(8888, function() {
    console.log('Listening on port 8888');
  });
});