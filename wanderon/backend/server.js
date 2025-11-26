// This code is referred from official website of Express. To check if the connection is working fine.
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(cors());
app.use(express.json());

//Estabilishing MongoDb Connection
const connectMongoDB = async () => {
  try {
    const connectionObject = await mongoose.connect(
      process.env.MONGODB_DATABASE_URL
    );
    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

//Demo Schema for testing Purpose
const demoMessageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Message = mongoose.model("Message", demoMessageSchema);

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
app.get("/api/hello", (req, res) => {
  res.json("This is code from backend");
});

// Demo API Route from Database


const initiateServer = async () => {
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log("========================================");
    console.log(`Server is up on port: ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
    console.log(`API: http://localhost:${PORT}/api/hello`);
    console.log("========================================");
  });
};

initiateServer();
