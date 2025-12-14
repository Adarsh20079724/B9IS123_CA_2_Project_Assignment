const express = require('express');
const router = express.Router();
const {
  getItineraryById,
  getItineraryByUser,
  deleteItinerary,
  updateDay,
  createItinerary,
  updateItinerary,
  addDay,
  deleteDay,
  getAllItinerary
} = require('../controllers/itineraryController');

// 1. Get All Itineraries
// GET /api/itineraries
router.get('/', getAllItinerary);

// 2. Get Itinerary By ID
// GET /api/itineraries/:id
router.get('/:id', getItineraryById);

// 3. Get Itineraries By User
// GET /api/itineraries/user/:userId
router.get('/user/:userId', getItineraryByUser);

// 4. Create New Itinerary
// POST /api/itineraries
router.post('/', createItinerary);

// 5. Update Itinerary
// PUT /api/itineraries/:id
router.put('/:id', updateItinerary);

// 6. Delete Itinerary
// DELETE /api/itineraries/:id
router.delete('/:id', deleteItinerary);

// 7. Add Day to Itinerary
// POST /api/itineraries/:id/days
router.post('/:id/days', addDay);

// 8. Update Day
// PUT /api/itineraries/:id/days/:dayId
router.put('/:id/days/:dayId', updateDay);

// 9. Delete Day from Itinerary
// DELETE /api/itineraries/:id/days/:dayId
router.delete('/:id/days/:dayId', deleteDay);

module.exports = router;