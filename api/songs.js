var express = require('express');
var router = express.Router();

var tableName = 'songs';

// List
router.get('/', function(req, res) {
  req.db.collection(tableName).find().toArray(function(err, results) {
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
router.post('/:id', function(req, res) {
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

module.exports = router;
