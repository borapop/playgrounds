var mongoose = require('mongoose');
var config = require('nconf').file('../config.json');
var logger = require('../common/logger');

mongoose.connect(config.get("dbpath"));

var db = mongoose.connection;
db.on('error', console.error.bind(logger, 'connection error:'));
db.once('open', function() {
  logger.log('info', 'Connected to mongodb');
});


module.exports = mongoose;