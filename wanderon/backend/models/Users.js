/* ------------------------------------------------------------
   Schema Model   : Users.js
   Purpose        : User Schema structure for mongoDB.
   References: 
    1. ExpressJS      : 
    2. Mongoose       : https://mongoosejs.com/docs/api/schema.html#Schema()
                      : https://mongoosejs.com/docs/api/model.html#Model()
    3. MongoDB        : 
    4. ChatGPT:
            Prompt    : 
            ChatLink  : 
-------------------------------------------------------------- */\

const mongoose = require('mongoose');

//@custom-edit-block 
const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'] //
  },
  userType: {
    type: String,
    enum: ['agent', 'traveller'],
    required: [true, 'User type is required']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, 
{
  timestamps: true
});