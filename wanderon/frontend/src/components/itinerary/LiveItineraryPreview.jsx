/* ------------------------------------------------------------
   Form      : LiveItineraryPreview.jsx
   Purpose   : This component is to view live preview of the itinerary which is being build
               by our forms.
   References: 
    1. ChatGPT Prompt           :  I have provided you my form, create a static view page with CSS as
                                  shown in the image. That component must view whatever entered in the 
                                  form. Provide sample data in the same for the first time view.
    2. Style Inspiration Image  : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS             : https://tailwindcss.com/docs/installation/using-vite
    4. Travel Websites          : https://wanderon.in/
       (for inspiration)        : https://www.thrillophilia.com/tours/scenic-iceland-with-diamond-circle
-------------------------------------------------------------- */

import { 
  FiMapPin, 
  FiHome, 
  FiActivity, 
  FiClock,
  FiCalendar,
  FiNavigation
} from 'react-icons/fi';
import { format } from 'date-fns';

const LiveItineraryPreview = (props) => {

  const itinerary = props.itinerary;

  const calculateStatistics = () => {
    const stats = {
      totalActivities: 0,
      totalTransfers: 0,
      totalHotels: 0,
      transfersByMode: {},
      activitiesByCategory: {},
      hotelsByCategory: {}
    }
        itinerary.days?.forEach(day => {
      if (day.transfer?.mode) {
        stats.totalTransfers++;
        stats.transfersByMode[day.transfer.mode] = (stats.transfersByMode[day.transfer.mode] || 0) + 1;
      }

      if (day.accommodation?.hotelName) {
        stats.totalHotels++;
        const category = day.accommodation.category || 'Standard';
        stats.hotelsByCategory[category] = (stats.hotelsByCategory[category] || 0) + 1;
      }

      day.activities?.forEach(activity => {
        stats.totalActivities++;
        stats.activitiesByCategory[activity.category] = (stats.activitiesByCategory[activity.category] || 0) + 1;
      });
    });

    return stats;
  }

  const stats = calculateStatistics();


  // This function is totally taken from chat gpt.
  const formatDate = (dateString) => {
    if (!dateString) return '';
    try {
      return format(new Date(dateString), 'MMM dd, yyyy');
    } catch {
      return dateString;
    }
  }


  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="card overflow-hidden">
        <div className="h-48 bg-linear-to-r from-blue-500 to-purple-600 overflow-hidden">
          {itinerary.thumbnail && (
            <img
              src={itinerary.thumbnail || "https://images.unsplash.com/photo-1501117716987-c8e1ecb2108a"}
              alt="Trip thumbnail"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {itinerary.title || 'Untitled Itinerary'}
          </h2>

          <div className="flex items-center flex-wrap gap-3 text-sm text-gray-600 mb-4">
            <span className="flex items-center space-x-1">
              <FiMapPin size={14} />
              <span>{itinerary.destination || 'No destination'}</span>
            </span>

            <span className="flex items-center space-x-1">
              <FiCalendar size={14} />
              <span>Aug 10, 2024 - Aug 15, 2024: Will add this later</span> 
            </span>

            <span className="flex items-center space-x-1">
              <FiClock size={14} />
              <span>6 days</span>
            </span>
          </div>

          {itinerary.summary && (
            <p className="text-gray-700">{itinerary.summary}</p>
          )}
        </div>
      </div>

      {/* Statistics Card */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Trip Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">
              {stats.totalActivities}
            </div>
            <div className="text-sm text-gray-600 mt-1">Activities</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">
              {stats.totalTransfers}
            </div>
            <div className="text-sm text-gray-600 mt-1">Transfers</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">
              {stats.totalHotels}
            </div>
            <div className="text-sm text-gray-600 mt-1">Hotels</div>
          </div>
        </div>
      </div>

      {/* Detailed Breakdowns */}
      {(Object.keys(stats.transfersByMode).length > 0 || 
        Object.keys(stats.activitiesByCategory).length > 0 || 
        Object.keys(stats.hotelsByCategory).length > 0) && (
        <div className="card p-6 space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Detailed Breakdown</h3>

          {/* Transfers Breakdown */}
          {Object.keys(stats.transfersByMode).length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                <FiNavigation size={16} />
                <span>Transfers</span>
              </h4>
              <div className="space-y-2">
                {Object.entries(stats.transfersByMode).map(([mode, count]) => (
                  <div key={mode} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{mode}</span>
                    <span className="font-medium text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Activities Breakdown */}
          {Object.keys(stats.activitiesByCategory).length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                <FiActivity size={16} />
                <span>Activities</span>
              </h4>
              <div className="space-y-2">
                {Object.entries(stats.activitiesByCategory).map(([category, count]) => (
                  <div key={category} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{category}</span>
                    <span className="font-medium text-gray-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hotels Breakdown */}
          {Object.keys(stats.hotelsByCategory).length > 0 && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2 flex items-center space-x-2">
                <FiHome size={16} />
                <span>Accommodations</span>
              </h4>
              <div className="space-y-2">
                {Object.entries(stats.hotelsByCategory).map(([category, count]) => (
                  <div key={category} className="flex justify-between items-center text-sm">
                    <span className="text-gray-700">{category}</span>
                    <span className="font-medium text-gray-900">{count} nights</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Days Preview */}
      {itinerary.days && itinerary.days.length > 0 && (
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Itinerary</h3>
          <div className="space-y-4">
            {itinerary.days.map((day, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">Day {day.dayNumber}</span>
                  {day.title && (
                    <>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-700">{day.title}</span>
                    </>
                  )}
                </div>

                {day.date && (
                  <p className="text-sm text-gray-600 mb-2">
                    {" Data to be added here"}
                  </p>
                )}

                {day.transfer?.mode && (
                  <div className="text-sm text-gray-700 mb-1">
                    <FiNavigation className="inline mr-1" size={12} />
                    {day.transfer.mode} from {day.transfer.from || '...'} to {day.transfer.to || '...'}
                  </div>
                )}

                {day.accommodation?.hotelName && (
                  <div className="text-sm text-gray-700 mb-1">
                    <FiHome className="inline mr-1" size={12} />
                    {day.accommodation.hotelName} ({day.accommodation.category})
                  </div>
                )}

                {day.activities && day.activities.length > 0 && (
                  <div className="text-sm text-gray-700">
                    <FiActivity className="inline mr-1" size={12} />
                    {day.activities.length} {day.activities.length === 1 ? 'activity' : 'activities'} planned
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveItineraryPreview;