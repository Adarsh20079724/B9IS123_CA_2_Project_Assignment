/* ------------------------------------------------------------
   File      : 
   Purpose   : 

   References: 
    1. ChatGPT Prompt          : Now I want the login logic to apply to my project. Login logic should be like: user clicks on login and he has not registered yet then in register there he should be only adding his full name and a email whether and there should be a dropdown asking if he is an agent or traveller. Then once he registered he should be only entering his Full name/username/email and click on a button to log in. Create authcontroller, auth middleware, authRoute as well.
    2. File referred           : 
--------------------------------------------------------------*/

const express = require('express');
const router = express.Router();
const {
  register,
  login,
  getUserById,
  getCurrentUser
} = require('../controllers/authController');
const authMiddleware = require('../middleware/auth');

// Public routes
// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

// GET /api/auth/user/:id
router.get('/user/:id', getUserById);

// Protected routes
// GET /api/auth/me - Get current logged-in user
router.get('/me', authMiddleware, getCurrentUser);

module.exports = router;