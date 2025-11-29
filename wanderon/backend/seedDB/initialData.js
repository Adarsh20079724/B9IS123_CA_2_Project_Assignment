const { Message } = require('../models');

const initialData = async () => {
  try {
    const count = await Message.countDocuments();
    if (count === 0) {
      await Message.create({ text: "Hello!! from Database" });
      console.log("Initial data inserted into Database");
    } else {
        console.log("Demo Data is already available in the Database")
    }
  } catch (err) {
    console.error("Error in inserting data: ", err);
    throw err;
  }
};

module.exports = initialData;