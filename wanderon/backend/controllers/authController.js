/* ------------------------------------------------------------
   File      : 
   Purpose   : 

   References: 
    1. ChatGPT Prompt          : Now I want the login logic to apply to my project. Login logic should be like: user clicks on login and he has not registered yet then in register there he should be only adding his full name and a email whether and there should be a dropdown asking if he is an agent or traveller. Then once he registered he should be only entering his Full name/username/email and click on a button to log in. Create authcontroller, auth middleware, authRoute as well.
    2. File referred           : 
--------------------------------------------------------------*/

const { User } = require('../models');
const { generateToken } = require('../utils/jwsUtils');

// Register New User
const register = async (req, res) => {
  try {
    const { fullName, email, userType } = req.body;

    // Validate required fields
    if (!fullName || !email || !userType) {
      return res.status(400).json({
        success: false,
        message: 'Please provide fullName, email, and userType'
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists'
      });
    }

    // Create new user
    const newUser = await User.create({
      fullName,
      email: email.toLowerCase(),
      userType
    });

    // Generate JWT token
    const token = generateToken(newUser._id);

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token,
      user: {
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        userType: newUser.userType,
        avatar: newUser.avatar
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error registering user',
      error: error.message
    });
  }
};

// Login User
const login = async (req, res) => {
  try {
    const { identifier } = req.body; // Can be email or fullName

    // Validate input
    if (!identifier) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email or full name'
      });
    }

    // Find user by email or fullName
    const user = await User.findOne({
      $or: [
        { email: identifier.toLowerCase() },
        { fullName: { $regex: new RegExp(`^${identifier}$`, 'i') } }
      ]
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found. Please register first.'
      });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        userType: user.userType,
        avatar: user.avatar
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: error.message
    });
  }
};

// Get User by ID
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id).select('-__v');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user',
      error: error.message
    });
  }
};

// Get Current User (from token)
const getCurrentUser = async (req, res) => {
  try {
    // req.user is set by auth middleware
    const user = await User.findById(req.user.id).select('-__v');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching current user',
      error: error.message
    });
  }
};

module.exports = {
  register,
  login,
  getUserById,
  getCurrentUser
};