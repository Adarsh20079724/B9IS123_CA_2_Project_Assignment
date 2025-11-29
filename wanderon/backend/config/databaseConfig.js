const mongoose = require('mongoose');

const connectMongoDB = async () => {
  try {
   const conn =  await mongoose.connect(process.env.MONGODB_DATABASE_URL);

    console.log("MongoDB Connected Successfully");
    //console.log("Conn Object:", conn )
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
};

module.exports = connectMongoDB;