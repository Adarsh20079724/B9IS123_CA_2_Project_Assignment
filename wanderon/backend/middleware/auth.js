/* ------------------------------------------------------------
   File      : 
   Purpose   : 

   References: 
    1. ChatGPT Prompt          : Now I want the login logic to apply to my project. Login logic should be like: user clicks on login and he has not registered yet then in register there he should be only adding his full name and a email whether and there should be a dropdown asking if he is an agent or traveller. Then once he registered he should be only entering his Full name/username/email and click on a button to log in. Create authcontroller, auth middleware, authRoute as well.
    2. File referred           : 
--------------------------------------------------------------*/

const { verifyToken } = require('../utils/jwsUtils');
const { User } = require('../models');

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'No token provided. Please login.'
      });
    }

    // Extract token
    const token = authHeader.split(' ')[1];

    // Verify token
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({
        success: false,
        message: 'Invalid or expired token. Please login again.'
      });
    }

    // Check if user exists
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User no longer exists'
      });
    }

    // Attach user to request
    req.user = {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      userType: user.userType
    };

    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Authentication failed',
      error: error.message
    });
  }
};

module.exports = authMiddleware;