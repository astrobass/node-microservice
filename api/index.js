var express =  require('express');
var app = express();
var mongoose - require('mongoose');

var dbName = 'mongo';
var tableName = 'test';

var db;

mongoose.connect(config.db[app.settings.env], function(err, database) {
  if(err) {
    return console.log('Mongo connect error... ' + err);
  }
  db = database;

  app.use('/songs', songs);

  app.listen(8888, function() {
    console.log('Listening on port 8888');
  });
});

