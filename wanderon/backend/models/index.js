//This is a central export point for all the models in the project

const Message = require("./Messages");
const Itinerary = require("./Itinerary");
const User = require("./Users")

module.exports = {
  Message,
  Itinerary,
  User
  // More models will be added here
};
