/* ------------------------------------------------------------
   File      : 
   Purpose   : 

   References: 
    1. ChatGPT Prompt          : 
    2. File referred           : 
--------------------------------------------------------------*/

require('dotenv').config();

module.exports = {
  // Configuration for Server
  PORT: process.env.PORT || 3000,
  
  // Configuration for Database
  MONGODB_DATABASE_URL: process.env.MONGODB_DATABASE_URL,  

  // Configuration JWT Token 
  JWT_SECRET: process.env.JWT_SECRET_TOKEN,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRY,

};