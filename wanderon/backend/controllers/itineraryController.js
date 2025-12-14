/* ------------------------------------------------------------
   File      : 
   Purpose   : 

   References: 
    1. ChatGPT Prompt          : 
    2. File referred           : 
--------------------------------------------------------------*/

const { Itinerary } = require('../models')

//--------------------------------------------------------------
// 1.                  Get All Itineraries
//--------------------------------------------------------------

const getAllItinerary = async (req, res) => {
    try {
    
    const itineraries = await Itinerary.find()
      .populate('userId', 'fullName email')
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: itineraries.length,
      data: itineraries
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching itineraries',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 2.                  Get Itineraries by ID
//--------------------------------------------------------------
const getItineraryById = async (req, res) => {
    try {

      const { id } = req.params;
    
    const itinerary = await Itinerary.findById(id)
      .populate('userId', 'fullName email avatar');
    
    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: 'Itinerary not found'
      });
    }

    res.status(200).json({
      success: true,
      data: itinerary
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching Itinerary',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 3.                  Get Itineraries by user
//--------------------------------------------------------------
const getItineraryByUser = async (req, res) => {
    try {

    const { userId } = req.params;
    
    const itineraries = await Itinerary.find({ userId })
      .sort({ createdAt: -1 });
   
    res.status(200).json({
      success: true,
      count: itineraries.length,
      data: itineraries
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user itineraries',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 4.                  Delete Itinerary
//--------------------------------------------------------------
const deleteItinerary = async (req, res) => {
    try {

    const { id } = req.params;
    
    const itinerary = await Itinerary.findByIdAndDelete(id);
    
    if (!itinerary) {
      return res.status(404).json({
        success: false,
        message: 'Itinerary not found'
      });
    }      

    res.status(200).json({
      success: true,
      message: 'Itinerary deleted successfully',
      data: itinerary      
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error deleting itinerary',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 5.                       Update Day
//--------------------------------------------------------------
const updateDay = async (req, res) => {
    try {

    res.status(200).json({
      success: true,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user itineraries',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 6.                  Create new Itinerary
//--------------------------------------------------------------
const createItinerary = async (req, res) => {
    try {

    const itineraryData = req.body;
    
    const newItinerary = await Itinerary.create(itineraryData);
    
    const populatedItinerary = await Itinerary.findById(newItinerary._id)
      .populate('userId', 'fullName email avatar');

    res.status(201).json({
      success: true,
      message: 'Itinerary created successfully',
      data: populatedItinerary
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error in creating a new itinerary',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 7.                  Update Itinerary
//--------------------------------------------------------------
const updateItinerary = async (req, res) => {
    try {

    res.status(200).json({
      success: true,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user itineraries',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 8.                  Add Day to existing itinerary
//--------------------------------------------------------------
const addDay = async (req, res) => {
    try {

    res.status(200).json({
      success: true,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user itineraries',
      error: err.message
    });
  }
}

//===============================================================

//--------------------------------------------------------------
// 9.                  Delete a day
//--------------------------------------------------------------
const deleteDay = async (req, res) => {
    try {

    res.status(200).json({
      success: true,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching user itineraries',
      error: err.message
    });
  }
}

//===============================================================
module.exports = {
  getAllItinerary,
  getItineraryById,
  getItineraryByUser,
  deleteItinerary,
  updateDay,
  createItinerary,
  updateItinerary,
  addDay,
  deleteDay
};