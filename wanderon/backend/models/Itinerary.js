/* ------------------------------------------------------------
   Schema Model   : itinerary.js
   Purpose        : Itinerary Schema structure for mongoDB.
   References : 
    1. ExpressJS      : 
    2. Mongoose       : https://mongoosejs.com/docs/api/schema.html#Schema()
                      : https://mongoosejs.com/docs/api/model.html#Model()
    3. MongoDB        : 
    4. ChatGPT :
        Prompt        : Create a itinerary schema for this data sample. (Data Sample is present in ReadMe file)
    .   ChatLink      : https://chatgpt.com/share/693894b9-d530-800d-bfb5-7649656b1185
-------------------------------------------------------------- */

// models/Itinerary.js
const mongoose = require('mongoose');

const { Schema, model, Types } = mongoose;

// Activity sub-schema
const ActivitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    time: {
      type: String, // e.g. '16:00'
      required: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    category: {
      type: String,
      enum: ['Sightseeing', 'Adventure', 'Food', 'Shopping', 'Relaxation', 'Other'],
      default: 'Other',
    },
  },
  { _id: true } // keep separate _id for each activity
);

// Transfer sub-schema
const TransferSchema = new Schema(
  {
    mode: {
      type: String,
      enum: ['Flight', 'Train', 'Bus', 'Car', 'Ferry', 'Other'],
      required: true,
    },
    from: {
      type: String,
      required: true,
      trim: true,
    },
    to: {
      type: String,
      required: true,
      trim: true,
    },
    departureTime: {
      type: String, // '18:00'
    },
    arrivalTime: {
      type: String, // '08:00+1'
    },
  },
  { _id: false } // transfer is part of the day, no need for its own id
);

// Accommodation sub-schema
const AccommodationSchema = new Schema(
  {
    hotelName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String, // e.g. 'Deluxe', 'Standard'
      trim: true,
    },
    checkIn: {
      type: String, // '14:00'
    },
    checkOut: {
      type: String, // '' or '11:00'
    },
  },
  { _id: false }
);

// Day sub-schema
const DaySchema = new Schema(
  {
    dayNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String, // or Date if you prefer strict date type
      required: true,
    },
    transfer: TransferSchema,          // optional: can be null / undefined
    accommodation: AccommodationSchema, // optional
    activities: {
      type: [ActivitySchema],
      default: [],
    },
  },
  { _id: true }
);

// Statistics sub-schema
const StatisticsSchema = new Schema(
  {
    totalActivities: {
      type: Number,
      default: 0,
    },
    totalTransfers: {
      type: Number,
      default: 0,
    },
    totalHotels: {
      type: Number,
      default: 0,
    },
    totalDistance: {
      type: Number,
      default: 0, // you can store km here
    },
  },
  { _id: false }
);

// Main Itinerary schema
const ItinerarySchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      default: '',
    },

    startDate: {
      type: String, // or Date if you prefer
      required: true,
    },

    endDate: {
      type: String, // or Date if you prefer
      required: true,
    },

    duration: {
      type: Number,
      required: true,
    },

    summary: {
      type: String,
      default: '',
      trim: true,
    },

    // Pricing / cost fields
    expectedBudget: {
      type: Number,
      default: 0,
    },
    negotiatedCost: {
      type: Number,
      default: 0,
    },
    tripFinalCost: {
      type: Number,
      default: 0,
    },

    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },

    isPublic: {
      type: Boolean,
      default: false,
    },

    statistics: {
      type: StatisticsSchema,
      default: () => ({}),
    },

    days: {
      type: [DaySchema],
      default: [],
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

module.exports = Itinerary;