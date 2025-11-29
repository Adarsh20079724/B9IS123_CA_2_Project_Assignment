const express = require('express');
const router = express.Router();

const { getDBMessage, getServerMessage } = require('../controllers/messageController')

// Route: GET /api/hello
// Description: Get hello world message from Server 
// Access: Public

router.get('/hello', getServerMessage);

// Route: GET /api/hello
// Description: Get hello world message from Database
// Access: Public

router.get('/db', getDBMessage);

//console.log("Router: ", router);

module.exports = router;