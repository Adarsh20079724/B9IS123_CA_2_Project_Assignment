/* ------------------------------------------------------------
   Component : ItineraryCard.jsx
   Purpose   : This is a reusable and multipurpose card for displaying Existing trips/ Published itineraries. 
               This card is separated from Destinations template code.
   References: 
    1. ChatGPT Prompt          : Create a Static Page Template which should match the CSS of the project. 
                                 I have attached the image and link for reference. It must have a searchbar, 
                                 Title CSS to adjust footer component inside it. Create this component 
                                 with static data in it for testing purposes.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
    5. Website Inspiration     : https://www.thrillophilia.com/
                               : https://wanderon.in/
--------------------------------------------------------------*/

import { FiMapPin, FiClock, FiStar } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ItineraryCard = (props) => {
const navigate = useNavigate();

  const trip = props.trip;

    // @custom-edit-block: == START ==
  // Extract country from destination (e.g., "Paris, France" -> "France")
  const getCountry = (destination) => {
    if (!destination) return 'Unknown';
    const parts = destination.split(',');
    return parts.length > 1 ? parts[parts.length - 1].trim() : destination;
  };

  // Extract city from destination (e.g., "Paris, France" -> "Paris")
  const getCity = (destination) => {
    if (!destination) return 'Unknown';
    const parts = destination.split(',');
    return parts[0].trim();
  };

  // Format price from budget
  const formatPrice = (budget) => {
    if (!budget) return 'Contact for pricing';
    return `$${budget.toLocaleString()}`;
  };

  // Format duration
  const formatDuration = (days) => {
    if (!days) return 'N/A';
    return `${days} ${days === 1 ? 'Day' : 'Days'}`;
  };

  // Calculate rating based on statistics (placeholder logic)
  const calculateRating = () => {
    // You can implement your own rating logic here
    // For now, return a default rating
    return 4.5;
  };

  // Calculate reviews count (placeholder)
  const getReviewsCount = () => {
    // You can implement your own logic here
    // For now, return a placeholder
    return Math.floor(Math.random() * 500) + 50;
  };
  // @custom-edit-block: == END ==

  return (
    <article key={trip.id} className="card overflow-hidden flex flex-col">
      {/* Thumbnail */}
      <div className="h-44 w-full overflow-hidden">
        <img
          src={trip.thumbnail || 'https://via.placeholder.com/400x300?text=No+Image'}
          alt={trip.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
            {getCountry(trip.destination)}
          </p>
          <div className="inline-flex items-center space-x-1 text-xs text-gray-600">
            <FiStar className="text-green-500" size={14} />
            <span className="font-semibold">{calculateRating()}</span>
            <span className="text-gray-400">({getReviewsCount()})</span>
          </div>
        </div>

        <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
          {trip.title}
        </h3>

        <div className="flex items-center text-xs text-gray-600 mb-2">
          <FiMapPin className="mr-1" size={12} />
          <span className="truncate">{getCity(trip.destination)}</span>
        </div>

        <div className="flex items-center text-xs text-gray-600 mb-3">
          <FiClock className="mr-1" size={12} />
          <span>{formatDuration(trip.duration)}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {trip.summary || 'Explore this amazing destination and create unforgettable memories.'}
        </p>

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-base font-bold text-gray-900">
              {formatPrice(trip.expectedBudget)}
            </p>
          </div>
          <button 
            onClick={() => navigate(`/itinerary/${trip._id}`)} 
            className="btn-primary text-sm px-4 py-2"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
};

export default ItineraryCard;
