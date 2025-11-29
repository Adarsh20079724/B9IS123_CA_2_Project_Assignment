const Message = require('../models')

const getDBMessage = async (req, res) => {
    try {
    // const message = await Message.findOne().sort({ createdAt: -1 });
    const message = await Message.getLatest();

    if (!message) {
      return res.status(404).json({ 
        error: "No message Found" 
    });
    }

    res.status(200).json({
      success: true,
      data: {  
        message: message.text,
        timeStamp: message.createdAt,
      }
    });
  } catch (err) {
    console.error("Error Fetching DB Message, Check getDBMessage", err);
    res.status(500).json({ error: "Server Error" });
  }
}

module.exports = {
    getDBMessage,
};