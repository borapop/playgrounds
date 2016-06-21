var winston = require('winston');
var config = require('nconf').file('config.json');
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({
          level: 'error',
          colorize: true
      }),
      new (winston.transports.File)({
        filename: config.get('logFile'),
        level: 'error'
      })
    ],
    exceptionHandlers: [
        new(winston.transports.Console)({
            timestamp: true,
            handleExceptions: true,
            humanReadableUnhandledException: true
        }),
        new(winston.transports.File)({
            json: false,
            timestamp: true,
            handleExceptions: true,
            humanReadableUnhandledException: true,
            filename: config.get('logFile')
        })
    ],
    exitOnError: false
  });
  
 module.exports = logger;