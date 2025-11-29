// This code is referred from official website of Express. To check if the connection is working fine.
const express = require("express");
const connectMongoDB = require("./config/databaseConfig");
const cors = require("cors");
const Message = require("./models/Message");
const routes = require("./routes");
require("dotenv").config();

// Initialising the Express Application
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Demo initial data for testing

const insertDemoData = async () => {
  try {
    const count = await Message.countDocuments();
    if (count === 0) {
      await Message.create({ text: "Hello!! from Database" });
      console.log("Initial data inserted into Database");
    }
  } catch (err) {
    console.error("Error in inserting data: ", err);
  }
};


// Routes :

app.use('/', routes)

// Port Assign;
const PORT = process.env.PORT || 3000;

// Starting the server
const initiateServer = async () => {
  await connectMongoDB();
  await insertDemoData();

  app.listen(PORT, () => {
    console.log("========================================");
    console.log(`Server is up on port: ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
    console.log(`Server Message API: http://localhost:${PORT}/api/hello`);
    console.log(`DB message API: http://localhost:${PORT}/api/db`);
    console.log(`Health Check API: http://localhost:${PORT}/health_check`);
    console.log("========================================");
  });
};

initiateServer();
