/* ------------------------------------------------------------
   Page      : MyTripsPage.jsx
   Purpose   : My Trips Page to show trips created by a particular user.
   References: 
    1. ChatGPT Prompt          : Create css as inspired from the provided image for the My Trips Page. 
                                 It should show some cards and has Published, drafts and all Iinerary options
                                 Add dummy data to make cards visible for the first time.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import React from 'react'
import { FiPlus, FiEdit2, FiTrash2, FiMapPin, FiClock, FiEye } from 'react-icons/fi';

const MyTripsPage = () => {
   const staticTrips = [
    {
      id: 1,
      title: 'Summer Escape to Bali',
      destination: 'Bali, Indonesia',
      duration: 7,
      startDate: 'Aug 12, 2024',
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a',
      summary: 'A relaxing beach getaway with hidden waterfalls and scenic temples.',
      statistics: {
        totalActivities: 12,
        totalTransfers: 4,
        totalHotels: 2,
      },
    },
    {
      id: 2,
      title: 'European City Hopping',
      destination: 'Paris, Amsterdam, Berlin',
      duration: 10,
      startDate: 'Sep 05, 2024',
      status: 'draft',
      thumbnail: 'https://images.unsplash.com/photo-1499510318569-4f4ee60b48b6',
      summary: 'Explore historic streets, museums, and vibrant nightlife across Europe.',
      statistics: {
        totalActivities: 18,
        totalTransfers: 6,
        totalHotels: 4,
      },
    },
    {
      id: 3,
      title: 'Road Trip Across California',
      destination: 'San Francisco to Los Angeles',
      duration: 5,
      startDate: 'Oct 20, 2024',
      status: 'published',
      thumbnail: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa',
      summary: 'Coastal drives, national parks, and iconic city sights.',
      statistics: {
        totalActivities: 9,
        totalTransfers: 3,
        totalHotels: 3,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Trips</h1>
            <p className="text-gray-600 mt-1">Manage your travel itineraries</p>
          </div>
          <button className="btn-primary inline-flex items-center space-x-2">
            <FiPlus />
            <span>Create New Trip</span>
          </button>
        </div>

        {/* Filters (static, no logic) */}
        <div className="flex space-x-3 mb-6">
          <button className="px-4 py-2 rounded-full font-medium transition-colors bg-gray-900 text-white">
            All Trips
          </button>
          <button className="px-4 py-2 rounded-full font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100">
            Drafts
          </button>
          <button className="px-4 py-2 rounded-full font-medium transition-colors bg-white text-gray-700 hover:bg-gray-100">
            Published
          </button>
        </div>

        {/* Trips Grid (static sample cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staticTrips.map((trip) => (
            <div key={trip.id} className="card group overflow-hidden">
              {/* Thumbnail */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={trip.thumbnail}
                  alt={trip.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      trip.status === 'published'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {trip.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2 text-lg line-clamp-1">
                  {trip.title}
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiMapPin size={14} />
                    <span>{trip.destination}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <FiClock size={14} />
                    <span>{trip.duration} days</span>
                    <span>•</span>
                    <span>{trip.startDate}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {trip.summary}
                </p>

                {/* Statistics */}
                <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <span>{trip.statistics.totalActivities} activities</span>
                  <span>{trip.statistics.totalTransfers} transfers</span>
                  <span>{trip.statistics.totalHotels} hotels</span>
                </div>

                {/* Actions (static buttons, no handlers) */}
                <div className="flex space-x-2">
                  <button className="flex-1 btn-secondary text-sm py-2 inline-flex items-center justify-center space-x-1">
                    <FiEye size={14} />
                    <span>View</span>
                  </button>
                  <button className="flex-1 btn-primary text-sm py-2 inline-flex items-center justify-center space-x-1">
                    <FiEdit2 size={14} />
                    <span>Edit</span>
                  </button>
                  <button className="p-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional static "no trips" state (commented out, design only) */}
        {/*
        <div className="card p-12 text-center mt-8">
          <p className="text-gray-600 mb-4">No trips found</p>
          <button className="btn-primary">
            Create Your First Trip
          </button>
        </div>
        */}
      </div>
    </div>
  );

}

export default MyTripsPage