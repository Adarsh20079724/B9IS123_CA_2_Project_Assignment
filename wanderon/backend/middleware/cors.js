const cors = require('cors');

// Configuration for CROSS ORIGIN RESOURCE SHARING

const corsConfig = {
  origin: '*', // Allow all origins in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true, // Allow cookies to be sent
};

module.exports = cors(corsConfig);