// This code is referred from official website of Express. To check if the connection is working fine.
const express = require('express');
const connectMongoDB = require('./config/databaseConfig');
const cors = require('cors');
const Message = require('./models/message');
require('dotenv').config();

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

// Demo API Route from Server
app.get("/api/hello", async (req, res) => {
  res.json("This is code from backend");
});

// Demo API Route from Database
app.get("/api/db", async (req, res) => {
  try {
    const message = await Message.findOne().sort({ createdAt: -1 });

    if (!message) {
      return res.status(404).json({ error: "No message Found" });
    }

    res.json({
      message: message.text,
      timeStamp: message.createdAt,
    });
  } catch (err) {
    console.error("Error Fetching Message", err);
    res.status(500).json({ error: "Server Error" });
  }
});

// Health check route
app.get("/health_check", (req, res) => {
  res.json({ status: "Server is up and running" });
});

const PORT = process.env.PORT || 3000;

// Starting the server
const initiateServer = async () => {
  await connectMongoDB();
  await insertDemoData();

  app.listen(PORT, () => {
    console.log("========================================");
    console.log(`Server is up on port: ${PORT}`);
    console.log(`URL: http://localhost: ${PORT}`);
    console.log(`Server Message API: http://localhost:${PORT}/api/hello`);
    console.log(`DB message API: http://localhost:${PORT}/api/db`);
    console.log(`Health Check API: http://localhost:${PORT}/health_check`);
    console.log("========================================");
  });
};

initiateServer();
