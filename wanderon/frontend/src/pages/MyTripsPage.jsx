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

import React, { useState } from 'react'
import { FiPlus} from 'react-icons/fi';
import MyTripCard from '../components/sharedComponents/MyTripCard';
import { useItinerary } from '../context/ItineraryContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyTripsPage = () => {

  const navigate = useNavigate();
   // @custom-edit-block: == START ==
  // Use contexts instead of dummy data
  const { user } = useAuth();
  const { userItineraries, loading, error, deleteItinerary } = useItinerary();
  
  const [filter, setFilter] = useState('all');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  // Filter trips based on selected filter
  const filteredTrips = userItineraries.filter((trip) => {
    if (filter === 'all') return true;
    return trip.status === filter;
  });

  // Handle delete with confirmation
  const handleDelete = async (tripId) => {
    if (deleteConfirm === tripId) {
      // Confirm delete
      const result = await deleteItinerary(tripId);
      if (result.success) {
        setDeleteConfirm(null);
        // State automatically updated by context
      } else {
        alert(result.message || 'Failed to delete trip');
      }
    } else {
      // First click - show confirmation
      setDeleteConfirm(tripId);
      // Auto-cancel after 3 seconds
      setTimeout(() => setDeleteConfirm(null), 3000);
    }
  };
  // @custom-edit-block: == END ==

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            {/* @custom-edit-block: == START == */}
            <h1 className="text-3xl font-bold text-gray-900">
              My Trips {user && `(${userItineraries.length})`}
            </h1>
            <p className="text-gray-600 mt-1">
              {user 
                ? `Manage your travel itineraries, ${user.fullName}` 
                : 'Manage your travel itineraries'}
            </p>
            {/* @custom-edit-block: == END == */}
          </div>
          <button 
            onClick={() => navigate('/create')}
            className="btn-primary inline-flex items-center space-x-2"
            >
            <FiPlus />
            <span>Create New Trip</span>
          </button>
        </div>

        {/* Filters (static, no logic) */}
        <div className="flex space-x-3 mb-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {/* @custom-edit-block: == START == */}
            All Trips ({userItineraries.length})
            {/* @custom-edit-block: == END == */}
          </button>
          <button
            onClick={() => setFilter('draft')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === 'draft'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {/* @custom-edit-block: == START == */}
            Drafts ({userItineraries.filter(t => t.status === 'draft').length})
            {/* @custom-edit-block: == END == */}
          </button>
          <button
            onClick={() => setFilter('published')}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              filter === 'published'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {/* @custom-edit-block: == START == */}
            Published ({userItineraries.filter(t => t.status === 'published').length})
            {/* @custom-edit-block: == END == */}
          </button>
        </div>

                {/* @custom-edit-block: == START == */}
        {/* Error State */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            <p className="font-semibold">Error loading trips</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading your trips...</p>
            </div>
          </div>
        ) : userItineraries.length === 0 ? (
          // Empty State
          <div className="card p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">✈️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No trips yet
              </h3>
              <p className="text-gray-600 mb-6">
                Start planning your next adventure by creating your first trip!
              </p>
              <button 
                onClick={() => navigate('/create')}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FiPlus />
                <span>Create Your First Trip</span>
              </button>
            </div>
          </div>
        ) : filteredTrips.length === 0 ? (
          // No Trips for Selected Filter
          <div className="card p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No {filter} trips
              </h3>
              <p className="text-gray-600 mb-6">
                You don't have any {filter} trips yet.
              </p>
              <button 
                onClick={() => setFilter('all')}
                className="btn-secondary"
              >
                View All Trips
              </button>
            </div>
          </div>
        ) : (
          // Trips Grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrips.map((trip) => (
              <MyTripCard
                key={trip._id}
                trip={trip}
                onDelete={handleDelete}
                deleteConfirm={deleteConfirm === trip._id}
              />
            ))}
          </div>
        )}
        {/* @custom-edit-block: == END == */}      
      
      </div>
    </div>
  );

}

export default MyTripsPage;