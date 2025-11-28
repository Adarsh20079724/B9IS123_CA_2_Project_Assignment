require('dotenv').config();

module.exports = {
  // Configuration for Server
  PORT: process.env.PORT || 3000,
  
  // Configuration for Database
  MONGODB_DATABASE_URL: process.env.MONGODB_DATABASE_URL,
  
};