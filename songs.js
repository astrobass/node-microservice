var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();

// Song database schema and model
var Song = new Schema({
  name: String
});
var Songs = mongoose.model('Song', Song);

// List
router.get('/', function(req, res) {
  Songs.find({}, function(err, songs) {
    if(err) {
      res.send('Error');
    }
    res.json(songs);
  });
});

// Create
router.post('/', function(req, res) {
  var song = new Songs(req.body);
  song.save(function(err) {
    if(err) {
      res.send('Error');
    }
    res.send('OK');
  });
});

// Read
router.get('/:id', function(req, res) {
  Songs.findById(req.params.id, function(err, song) {
    if(err) {
      res.send('Error');
    }
    res.json(song);
  });
});

// Update
router.put('/:id', function(req, res) {
  Songs.findById(req.params.id, function(err, song) {
    song.save(function(err) {
      if(err) {
        res.send('Error');
      }
      res.send('OK');
    });
  });
});

// DELETE
router.delete('/:id', function(req, res) {
  Songs.remove({id: req.params.id}, function(req, res) {
    if(err) {
      res.send('Error');
    }
    res.send('OK');
  });
});

module.exports = router;
