var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

var Song = new Schema({
  name: String
});
var Songs = mongoose.model('Song', Song);

// List
router.get('/', function(req, res) {
  Songs.find({}, function(err, song) {
    if(err) {
      console.log('Error');
    }
    res.send('LIST');
  });
});

// Create
router.post('/', function(req, res) {
  req.db.collection(tableName).find().toArray(function(err, results) {
    if(err) {
      console.log('Error');
    }
    res.send('CREATE');
  });
});

// Read
router.get('/:id', function(req, res) {
  req.db.collection(tableName).find().toArray(function(err, results) { 
    if(err) {
      console.log('Error');
    }
    res.send('READ');
  });
});

// Update
router.put('/:id', function(req, res) {
  req.db.collection(tableName).save(req.body, function(req, res) {
    if(err) {
      console.log('Error');
    }
    res.send('UPDATE');
  });
});

// DELETE
router.delete('/:id', function(req, res) {
  req.db.collection(tableName).delete(req.body, function(req, res) {
    if(err) {
      console.log('Error');
    }
    res.send('DELETE');
  });
});

module.exports = router;
