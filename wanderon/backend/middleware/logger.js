const morgan = require('morgan');

// Logger Middleware to log http requests and response
// HTTP request logger using Morgan

// This code is generated with the help of morgan git repo and updated added with the help of Chatgpt.

morgan.token('status-color', (req, res) => {
  const status = res.statusCode;
  const color = status >= 500 ? 31 // red
    : status >= 400 ? 33 // yellow
    : status >= 300 ? 36 // cyan
    : status >= 200 ? 32 // green
    : 0; // no color
  return '\x1b[' + color + 'm' + status + '\x1b[0m';
});

 // Development logger format

const developmentLogger = morgan(
  ':method :url :status-color :response-time ms - :res[content-length]'
);

// production logger format

//const productionLogger = morgan('combined');

//Export appropriate logger based on environment

const logger = developmentLogger;
// const logger = process.env.NODE_ENV === 'production' 
//   ? productionLogger 
//   : developmentLogger;

module.exports = logger;