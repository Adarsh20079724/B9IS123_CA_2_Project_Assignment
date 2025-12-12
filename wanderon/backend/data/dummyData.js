/* ------------------------------------------------------------
   File      : dummyData.js
   Purpose   : Backend Dummy Data file (For Testing purposes)

   References: 
    1. ChatGPT Prompt          : Create 6 sample itineraries with the help of schema that I have provided.
    2. File referred           : itinerary.js (inside models)
--------------------------------------------------------------*/


const sampleItineraries = [
    {
  _id: "itin-101",
  userId: "user-1",
  title: "Bali Tropical Escape",
  destination: "Bali, Indonesia",
  thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  
  startDate: "2024-07-10",
  endDate: "2024-07-15",
  duration: 6,

  summary: "A relaxing tropical vacation exploring beaches, waterfalls, temples and cafés in Bali.",

  expectedBudget: 1200,
  negotiatedCost: 1050,
  tripFinalCost: 1100,

  status: "published",
  isPublic: true,

  statistics: {
    totalActivities: 5,
    totalTransfers: 2,
    totalHotels: 1,
    totalDistance: 65
  },

  days: [
    {
      _id: "day-101",
      dayNumber: 1,
      title: "Arrival & Beach Walk",
      date: "2024-07-10",
      transfer: {
        mode: "Flight",
        from: "Mumbai",
        to: "Denpasar",
        departureTime: "09:00",
        arrivalTime: "16:00"
      },
      accommodation: {
        hotelName: "Bali Dream Resort",
        category: "Deluxe",
        checkIn: "14:00",
        checkOut: "11:00"
      },
      activities: [
        {
          _id: "act-1011",
          name: "Sunset Walk at Seminyak Beach",
          time: "18:00",
          description: "Relaxing walk along the golden sand and sunset photography.",
          category: "Sightseeing"
        }
      ]
    },

    {
      _id: "day-102",
      dayNumber: 2,
      title: "Ubud Temples & Rice Terraces",
      date: "2024-07-11",
      activities: [
        {
          _id: "act-1012",
          name: "Tegallalang Rice Terrace",
          time: "09:00",
          description: "Explore the famous green rice fields.",
          category: "Sightseeing"
        },
        {
          _id: "act-1013",
          name: "Monkey Forest",
          time: "12:00",
          description: "Walk through the sacred forest filled with monkeys.",
          category: "Adventure"
        }
      ]
    }
  ]
},
{
  _id: "itin-102",
  userId: "user-1",
  title: "Tokyo Cultural Discovery",
  destination: "Tokyo, Japan",
  thumbnail: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",

  startDate: "2024-10-02",
  endDate: "2024-10-07",
  duration: 6,

  summary: "Modern cityscapes, ancient temples, technology hubs and Japanese cuisine exploration.",

  expectedBudget: 2000,
  negotiatedCost: 1850,
  tripFinalCost: 1900,

  status: "published",
  isPublic: false,

  statistics: {
    totalActivities: 6,
    totalTransfers: 1,
    totalHotels: 1,
    totalDistance: 40
  },

  days: [
    {
      _id: "day-201",
      dayNumber: 1,
      title: "Shibuya & Shinjuku",
      date: "2024-10-02",
      transfer: {
        mode: "Flight",
        from: "Dublin",
        to: "Tokyo Narita",
        departureTime: "10:00",
        arrivalTime: "07:00+1"
      },
      accommodation: {
        hotelName: "Shinjuku Grand Hotel",
        category: "Luxury",
        checkIn: "15:00",
        checkOut: "11:00"
      },
      activities: [
        {
          _id: "act-2011",
          name: "Shibuya Crossing",
          time: "17:00",
          description: "Visit the busiest pedestrian crossing in the world.",
          category: "Sightseeing"
        }
      ]
    }
  ]
},
{
  _id: "itin-103",
  userId: "user-1",
  title: "Swiss Alps Adventure",
  destination: "Interlaken, Switzerland",
  thumbnail: "https://images.unsplash.com/photo-1508264165352-258a6f0f21f2",

  startDate: "2025-01-15",
  endDate: "2025-01-20",
  duration: 6,

  summary: "Skiing, mountain views, lakes and Swiss chocolates in the heart of the Alps.",

  expectedBudget: 2500,
  negotiatedCost: 2300,
  tripFinalCost: 2400,

  status: "published",
  isPublic: true,

  statistics: {
    totalActivities: 7,
    totalTransfers: 2,
    totalHotels: 1,
    totalDistance: 120
  },

  days: [
    {
      _id: "day-301",
      dayNumber: 1,
      title: "Arrival & Lake Brienz",
      date: "2025-01-15",
      accommodation: {
        hotelName: "Alpine Royal Lodge",
        category: "Deluxe",
        checkIn: "14:00",
        checkOut: "11:00"
      },
      activities: [
        {
          _id: "act-3011",
          name: "Lake Brienz Boat Ride",
          time: "16:00",
          description: "A peaceful scenic boat trip across crystal-clear water.",
          category: "Relaxation"
        }
      ]
    }
  ]
},
{
  _id: "itin-104",
  userId: "user-1",
  title: "Dubai Luxury Holiday",
  destination: "Dubai, UAE",
  thumbnail: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",

  startDate: "2024-11-05",
  endDate: "2024-11-09",
  duration: 5,

  summary: "Skyscrapers, desert safari, luxury shopping and modern attractions.",

  expectedBudget: 1800,
  negotiatedCost: 1650,
  tripFinalCost: 1700,

  status: "published",
  isPublic: false,

  statistics: {
    totalActivities: 5,
    totalTransfers: 1,
    totalHotels: 1,
    totalDistance: 55
  },

  days: [
    {
      _id: "day-401",
      dayNumber: 1,
      title: "Burj Khalifa & Mall",
      date: "2024-11-05",
      activities: [
        {
          _id: "act-4011",
          name: "At The Top – Burj Khalifa",
          time: "11:00",
          description: "Visit the world's tallest building.",
          category: "Sightseeing"
        }
      ]
    }
  ]
},
{
  _id: "itin-105",
  userId: "user-1",
  title: "Thailand Island Hopper",
  destination: "Phuket & Phi Phi Islands",
  thumbnail: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",

  startDate: "2024-09-12",
  endDate: "2024-09-18",
  duration: 7,

  summary: "Island hopping, snorkeling, beaches and night markets in Southern Thailand.",

  expectedBudget: 1400,
  negotiatedCost: 1250,
  tripFinalCost: 1300,

  status: "published",
  isPublic: true,

  statistics: {
    totalActivities: 6,
    totalTransfers: 3,
    totalHotels: 2,
    totalDistance: 180
  },

  days: [
    {
      _id: "day-501",
      dayNumber: 1,
      title: "Phuket Exploration",
      date: "2024-09-12",
      activities: [
        {
          _id: "act-5011",
          name: "Patong Beach",
          time: "15:00",
          description: "Relax at Phuket’s most iconic beach.",
          category: "Relaxation"
        }
      ]
    }
  ]
},
{
  _id: "itin-106",
  userId: "user-1",
  title: "New York City Urban Experience",
  destination: "New York, USA",
  thumbnail: "https://images.unsplash.com/photo-1534447677768-be436bb09401",

  startDate: "2025-03-01",
  endDate: "2025-03-05",
  duration: 5,

  summary: "Iconic landmarks, skyscrapers, museums and urban culture.",
  
  expectedBudget: 1600,
  negotiatedCost: 1450,
  tripFinalCost: 1500,

  status: "published",
  isPublic: true,

  statistics: {
    totalActivities: 6,
    totalTransfers: 1,
    totalHotels: 1,
    totalDistance: 35
  },

  days: [
    {
      _id: "day-601",
      dayNumber: 1,
      title: "Times Square & Broadway",
      date: "2025-03-01",
      activities: [
        {
          _id: "act-6011",
          name: "Times Square Walk",
          time: "18:00",
          description: "Explore the bright lights and live entertainment.",
          category: "Sightseeing"
        }
      ]
    }
  ]
}
]