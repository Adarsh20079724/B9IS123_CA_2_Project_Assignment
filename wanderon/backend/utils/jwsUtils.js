/* ------------------------------------------------------------
   File      : 
   Purpose   : 

   References: 
    1. ChatGPT Prompt          : Now I want the login logic to apply to my project. Login logic should be like: user clicks on login and he has not registered yet then in register there he should be only adding his full name and a email whether and there should be a dropdown asking if he is an agent or traveller. Then once he registered he should be only entering his Full name/username/email and click on a button to log in. Create authcontroller, auth middleware, authRoute as well.
    2. File referred           : 
--------------------------------------------------------------*/

const jwt = require('jsonwebtoken');

// Generate JWT Token
const generateToken = (userId) => {
  const payload = {
    id: userId
  };

  const token = jwt.sign(
    payload,
    process.env.JWT_SECRET || 'your_jwt_secret_key_here',
    { expiresIn: process.env.JWT_EXPIRES_IN || '30d' }
  );

  return token;
};

// Verify JWT Token
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || 'your_jwt_secret_key_here'
    );
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken
};