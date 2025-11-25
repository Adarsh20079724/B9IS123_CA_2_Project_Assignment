// This code is referred from official website of Express. To check if the connection is working fine.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware 
app.use(cors());
app.use(express.json())

//Estabilishing MongoDb Connection
const connectMongoDB = async () => {
  try {

    const connectionObject = await mongoose.connect(process.env.MONGODB_DATABASE_URL);
    console.log('MongoDB Connected Successfully', connectionObject);

  } catch (err) {
    console.error('MongoDB Connection Error:', err);
  }
}

app.get('/api/hello', (req, res) => {
    res.json("This is code from backend")
})

const initiateServer = async () => {

  await connectMongoDB();

  app.listen(PORT, () => {
  console.log('========================================');
  console.log(`Server is up on port: ${PORT}`)
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`API: http://localhost:${PORT}/api/hello`);
  console.log('========================================');
});
}

initiateServer();