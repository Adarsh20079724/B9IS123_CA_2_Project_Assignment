/* ------------------------------------------------------------
   Component : MyTripCard.jsx
   Purpose   : This is a reusable and multipurpose card for displaying itineraries in different pages according to need. 
               This card is separated from MyTripsPage template code.
   References: 
    1. ChatGPT Prompt          : Create css as inspired from the provided image for the My Trips Page. 
                                 It should show some cards and has Published, drafts and all Iinerary options
                                 Add dummy data to make cards visible for the first time.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
    5. React-Router Docs.      : https://reactrouter.com/start/data/installation
--------------------------------------------------------------*/

import {
  FiEdit2,
  FiTrash2,
  FiMapPin,
  FiClock,
  FiEye,
  FiCalendar,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const MyTripCard = ({ trip, onDelete, deleteConfirm }) => {
  const navigate = useNavigate();

  // @custom-edit-block: == START ==
  // Helper functions for formatting data
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-700";
      case "draft":
        return "bg-yellow-100 text-yellow-700";
      case "archived":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-blue-100 text-blue-700";
    }
  };

  const getStatusLabel = (status) => {
    return status ? status.charAt(0).toUpperCase() + status.slice(1) : "Draft";
  };
  // @custom-edit-block: == END ==

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
          {/* @custom-edit-block: == START == */}
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
              trip.status
            )}`}
          >
            {getStatusLabel(trip.status)}
          </span>
          {/* @custom-edit-block: == END == */}
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
            <span>
              {trip.duration} {trip.duration === 1 ? "day" : "days"}
            </span>
            <span>•</span>
            {/* @custom-edit-block: == START == */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <FiCalendar size={14} />
              <span>{formatDate(trip.startDate)}</span>
            </div>
            {/* @custom-edit-block: == END == */}
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {/* @custom-edit-block: == START == */}
          {trip.summary || "No description available"}
          {/* @custom-edit-block: == END == */}
        </p>

        {/* Statistics */}
        <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4 pb-4 border-b border-gray-100">
          {/* @custom-edit-block: == START == */}
          <span>{trip.statistics?.totalActivities || 0} activities</span>
          <span>{trip.statistics?.totalTransfers || 0} transfers</span>
          <span>{trip.statistics?.totalHotels || 0} hotels</span>
          {/* @custom-edit-block: == END == */}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/itinerary/${trip._id}`)}
            className="flex-1 btn-secondary text-sm py-2 inline-flex items-center justify-center space-x-1"
          >
            <FiEye size={14} />
            <span>View</span>
          </button>
          <button
            onClick={() => navigate(`/edit-trip/${trip._id}`)}
            className="flex-1 btn-primary text-sm py-2 inline-flex items-center justify-center space-x-1"
          >
            <FiEdit2 size={14} />
            <span>Edit</span>
          </button>
          {/* @custom-edit-block: == START == */}
          <button
            onClick={() => onDelete(trip._id)}
            className={`p-2 border rounded-lg transition-colors ${
              deleteConfirm
                ? "border-red-600 bg-red-600 text-white hover:bg-red-700"
                : "border-red-300 text-red-600 hover:bg-red-50"
            }`}
            title={
              deleteConfirm ? "Click again to confirm delete" : "Delete trip"
            }
          >
            <FiTrash2 size={16} />
          </button>
          {/* @custom-edit-block: == END == */}
        </div>

        {/* @custom-edit-block: == START == */}
        {/* Delete Confirmation Message */}
        {deleteConfirm && (
          <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded text-xs text-red-700 text-center">
            Click delete again to confirm
          </div>
        )}
        {/* @custom-edit-block: == END == */}
      </div>
    </div>
  );
};

export default MyTripCard;
