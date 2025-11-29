// This code is referred from official website of Express. To check if the connection is working fine.
const express = require("express");
const connectMongoDB = require("./config/databaseConfig");
const corsMiddleware = require("./middleware/cors");
const initialData = require("./seedDB/initialData");
const routes = require("./routes");
const config = require("./config/env")
require("dotenv").config();

// Initialising the Express Application
const app = express();

// Middleware
app.use(corsMiddleware);

// Body Parser: Parses JSON Requests
app.use(express.json());

// Routes :
app.use('/', routes)

// Starting the server
const initiateServer = async () => {
  // initialising database connection
  await connectMongoDB();

  // Inserting initial Data into the database
  await initialData();

  // Assigning the Port;
  const PORT = config.PORT || 3000;

  // Start listening server at port 3000
  app.listen(PORT, () => {
    console.log("========================================");
    console.log(`Server is up on port: ${PORT}`);
    console.log(`URL: http://localhost:${PORT}`);
    console.log(`Server Message API: http://localhost:${PORT}/api/hello`);
    console.log(`DB message API: http://localhost:${PORT}/api/db`);
    console.log(`Health Check API: http://localhost:${PORT}/`);
    console.log("========================================");
  });
};

initiateServer();
