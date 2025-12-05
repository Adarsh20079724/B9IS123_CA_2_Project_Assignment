/* ------------------------------------------------------------
   Component : ItineraryCard.jsx
   Purpose   : This is a reusable and multipurpose card for displaying itineraries in different pages according to need. This card is separated from MyTripsPage template code.

   References: 
    1. ChatGPT Prompt          : Create css as inspired from the provided image for the My Trips Page. 
                                 It should show some cards and has Published, drafts and all Iinerary options
                                 Add dummy data to make cards visible for the first time.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import { FiPlus, FiEdit2, FiTrash2, FiMapPin, FiClock, FiEye } from 'react-icons/fi';

const ItineraryCard = (props) => { 
  const trip = props.trip

  //console.log("trip: ",trip);

  return (
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
  )
}

export default ItineraryCard