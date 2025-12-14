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
// 2.                  Get Itineraries by ID
//--------------------------------------------------------------
const getItineraryById = async (req, res) => {
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
// 3.                  Get Itineraries by users
//--------------------------------------------------------------
const getItineraryByUsers = async (req, res) => {
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
// 4.                  Delete Itinerary
//--------------------------------------------------------------
const deleteItinerary = async (req, res) => {
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
  getItineraryByUsers,
  deleteItinerary,
  updateDay,
  createItinerary,
  updateItinerary,
  addDay,
  deleteDay
};