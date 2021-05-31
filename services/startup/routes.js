const express = require('express');
const error = require('../middleware/error');

const registers = require('../routes/registers');
var cors = require('cors')

module.exports = function(app) {
  app.use(cors())
  app.use(express.json());
  app.use('/profile', registers);
  app.use(error);
}