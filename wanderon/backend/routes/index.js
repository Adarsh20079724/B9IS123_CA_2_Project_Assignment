const express = require('express');
const router = express.Router();
const messageRoutes = require('./messageRoutes');
const authRoutes = require('./authRoutes');
const itineraryRoutes = require('./itineraryRoutes');

/**
 * Routes Index
 * Central routing configuration
 */

// Health check route
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Mount message routes
router.use('/api', messageRoutes);
router.use('/api/auth', authRoutes);
router.use('/api/itineraries', itineraryRoutes);

//console.log("router from index:", router)

module.exports = router;