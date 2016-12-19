var express = require('express');
var router = express.Router();

// List
router.get('/', function(req, res) {
  res.send('LIST');
}

// Create
router.post('/', function(req, res) {
  res.send('CREATE');
}

// Read
router.get('/:id', function(req, res) {
  res.send('READ');
}

// Update
router.post('/:id', function(req, res) {
  res.send('UPDATE');
}

// DELETE
router.delete('/:id', function(req, res) {
  res.send('DELETE');
}
