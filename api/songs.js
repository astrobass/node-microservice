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
  Songs.save(req.body, function(err, results) {
    if(err) {
      console.log('Error');
    }
    res.send('CREATE: ' + req.body);
  });
});

// Read
router.get('/:id', function(req, res) {
  Songs.find(req.params.id, function(err, results) { 
    if(err) {
      console.log('Error');
    }
    res.send('READ: ' + req.params.id);
  });
});

// Update
router.put('/:id', function(req, res) {
  Songs.save(req.body, function(err, results) {
    if(err) {
      console.log('Error');
    }
    res.send('UPDATE: ' + req.params.id);
  });
});

// DELETE
router.delete('/:id', function(req, res) {
  Songs.delete(req.params.id, function(req, res) {
    if(err) {
      console.log('Error');
    }
    res.send('DELETE: ' + req.params.id);
  });
});

module.exports = router;
