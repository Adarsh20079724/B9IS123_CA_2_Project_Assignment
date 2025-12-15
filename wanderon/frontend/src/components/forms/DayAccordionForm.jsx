/* ------------------------------------------------------------
   Form      : DayAccordionForm.jsx
   Purpose   : This is a form used to create days in itinerary 
   References: 
    1. ChatGPT Prompt          : Create a form which takes day details, Transportation details, Accommodation 
                                 Details and Activity details. All the details should be wrapped up in an accordion. 
                                 Css should be inspired from the provided image. Keep the component static. Add 
                                 Icons from react-icons library.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiTrash2,
  FiCopy,
  FiPlus,
  FiMapPin,
  FiHome,
  FiActivity,
} from "react-icons/fi";

const DayAccordionForm = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { day, dayIndex, onUpdate, onDelete, onDuplicate } = props;

  const handleFieldChange = (field, value) => {
    onUpdate({ ...day, [field]: value });
  };

  // @custom-edit-block: == START ==
  // Updated to handle arrays for MongoDB structure
  const addTransfer = () => {
    const newTransfer = {
      mode: '',
      from: '',
      to: '',
      description: ''
    };
    onUpdate({
      ...day,
      transfer: [...(day.transfer || []), newTransfer]
    });
  };

  const updateTransfer = (transferIndex, field, value) => {
    const newTransfers = [...(day.transfer || [])];
    newTransfers[transferIndex] = {
      ...newTransfers[transferIndex],
      [field]: value
    };
    onUpdate({ ...day, transfer: newTransfers });
  };

  const deleteTransfer = (transferIndex) => {
    const newTransfers = (day.transfer || []).filter((_, index) => index !== transferIndex);
    onUpdate({ ...day, transfer: newTransfers });
  };

  const addAccommodation = () => {
    const newAccommodation = {
      name: '',
      category: 'Standard',
      location: ''
    };
    onUpdate({
      ...day,
      accommodation: [...(day.accommodation || []), newAccommodation]
    });
  };

  const updateHotel = (hotelIndex, field, value) => {
    const newAccommodations = [...(day.accommodation || [])];
    newAccommodations[hotelIndex] = {
      ...newAccommodations[hotelIndex],
      [field]: value
    };
    onUpdate({ ...day, accommodation: newAccommodations });
  };

  const deleteHotel = (hotelIndex) => {
    const newAccommodations = (day.accommodation || []).filter((_, index) => index !== hotelIndex);
    onUpdate({ ...day, accommodation: newAccommodations });
  };
  // @custom-edit-block: == END ==

  const addActivity = () => {
    const newActivity = {
      name: '',
      time: '',
      description: '',
      category: 'Sightseeing'
    };
    onUpdate({
      ...day,
      activities: [...(day.activities || []), newActivity]
    });
  };

  const updateActivity = (activityIndex, field, value) => {
    const newActivities = [...(day.activities || [])];
    newActivities[activityIndex] = {
      ...newActivities[activityIndex],
      [field]: value
    };
    onUpdate({ ...day, activities: newActivities });
  };

  const deleteActivity = (activityIndex) => {
    const newActivities = (day.activities || []).filter((_, index) => index !== activityIndex);
    onUpdate({ ...day, activities: newActivities });
  };

  // @custom-edit-block: == START ==
  // Updated counts for MongoDB structure
  const transferCount = day.transfer?.length || 0;
  const hotelCount = day.accommodation?.length || 0;
  const activityCount = day.activities?.length || 0;
  // @custom-edit-block: == END ==

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="p-4 hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex justify-between items-center">
          {/* Left Title Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-gray-900">
                Day {day.dayNumber}
              </span>
              <span className="text-gray-600">-</span>
              <span className="text-gray-700">
                {day.title || "Untitled Day"}
              </span>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Indicators */}
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              {/* Transfer Count */}
              {transferCount > 0 && (
                <span className="flex items-center space-x-1">
                  <FiMapPin size={14} />
                  <span>{transferCount}</span>
                </span>
              )}

              {/* Hotel Count */}
              {hotelCount > 0 && (
                <span className="flex items-center space-x-1">
                  <FiHome size={14} />
                  <span>{hotelCount}</span>
                </span>
              )}

              {/* Activity Count */}
              {activityCount > 0 && (
                <span className="flex items-center space-x-1">
                  <FiActivity size={14} />
                  <span>{activityCount}</span>
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">
              {/* Duplicate Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDuplicate();
                }}
                className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                title="Duplicate day"
              >
                <FiCopy size={16} />
              </button>

              {/* Delete Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (window.confirm('Are you sure you want to delete this day?')) {
                    onDelete();
                  }
                }}
                className="p-1.5 hover:bg-red-50 text-red-600 rounded transition-colors"
                title="Delete day"
              >
                <FiTrash2 size={16} />
              </button>

              {/* Chevron to expand accordion */}
              {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Section */}
      {isExpanded && (
        <div className="p-6 border-t border-gray-100 space-y-6 bg-gray-50">
          {/* Day Title & Date */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="label">Day Title</label>
              <input
                type="text"
                value={day.title}
                onChange={(e) => handleFieldChange("title", e.target.value)}
                placeholder="e.g., Arrival in Paris"
                className="input-field"
              />
            </div>
            <div>
              <label className="label">Date</label>
              <input
                type="date"
                value={day.date?.split("T")[0] || ""}
                onChange={(e) => handleFieldChange("date", e.target.value)}
                className="input-field"
              />
            </div>
          </div>

          {/* @custom-edit-block: == START == */}
          {/* Transportation - Updated for MongoDB array structure */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                <FiMapPin />
                <span>Transportation</span>
              </h4>
              <button
                onClick={addTransfer}
                className="text-sm btn-primary inline-flex items-center space-x-1"
              >
                <FiPlus size={14} />
                <span>Add Transfer</span>
              </button>
            </div>

            {day.transfer?.length === 0 || !day.transfer ? (
              <p className="text-gray-500 text-sm">No transfers added yet</p>
            ) : (
              <div className="space-y-3">
                {day.transfer.map((transfer, transferIndex) => (
                  <div key={transferIndex} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-medium text-gray-700">Transfer {transferIndex + 1}</span>
                      <button
                        onClick={() => deleteTransfer(transferIndex)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="label text-xs">Mode</label>
                        <select
                          value={transfer.mode || ''}
                          onChange={(e) => updateTransfer(transferIndex, 'mode', e.target.value)}
                          className="input-field text-sm"
                        >
                          <option value="">Select mode</option>
                          <option value="Flight">Flight</option>
                          <option value="Train">Train</option>
                          <option value="Bus">Bus</option>
                          <option value="Car">Car</option>
                          <option value="Taxi">Taxi</option>
                          <option value="Ferry">Ferry</option>
                          <option value="Private Car">Private Car</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="label text-xs">From</label>
                          <input
                            type="text"
                            value={transfer.from || ''}
                            onChange={(e) => updateTransfer(transferIndex, 'from', e.target.value)}
                            placeholder="Departure location"
                            className="input-field text-sm"
                          />
                        </div>
                        <div>
                          <label className="label text-xs">To</label>
                          <input
                            type="text"
                            value={transfer.to || ''}
                            onChange={(e) => updateTransfer(transferIndex, 'to', e.target.value)}
                            placeholder="Arrival location"
                            className="input-field text-sm"
                          />
                        </div>
                      </div>
                      {/* <div>
                        <label className="label text-xs">Description</label>
                        <input
                          type="text"
                          value={transfer.description || ''}
                          onChange={(e) => updateTransfer(transferIndex, 'description', e.target.value)}
                          placeholder="Transfer details..."
                          className="input-field text-sm"
                        />
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Accommodation - Updated for MongoDB array structure */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                <FiHome />
                <span>Accommodation</span>
              </h4>
              <button
                onClick={addAccommodation}
                className="text-sm btn-primary inline-flex items-center space-x-1"
              >
                <FiPlus size={14} />
                <span>Add Hotel</span>
              </button>
            </div>

            {day.accommodation?.length === 0 || !day.accommodation ? (
              <p className="text-gray-500 text-sm">No hotels added yet</p>
            ) : (
              <div className="space-y-3">
                {day.accommodation.map((hotel, hotelIndex) => (
                  <div key={hotelIndex} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-medium text-gray-700">Hotel {hotelIndex + 1}</span>
                      <button
                        onClick={() => deleteHotel(hotelIndex)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="label text-xs">Hotel Name</label>
                        <input
                          type="text"
                          value={hotel.hotelName || ''}
                          onChange={(e) => updateHotel(hotelIndex, 'hotelName', e.target.value)}
                          placeholder="Enter hotel name"
                          className="input-field text-sm"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="label text-xs">Category</label>
                          <select
                            value={hotel.category || 'Standard'}
                            onChange={(e) => updateHotel(hotelIndex, 'category', e.target.value)}
                            className="input-field text-sm"
                          >
                            <option value="Budget">Budget</option>
                            <option value="Standard">Standard</option>
                            <option value="3 Star">3 Star</option>
                            <option value="4 Star">4 Star</option>
                            <option value="5 Star">5 Star</option>
                            <option value="Luxury">Luxury</option>
                          </select>
                        </div>
                        {/* <div>
                          <label className="label text-xs">Location</label>
                          <input
                            type="text"
                            value={hotel.location || ''}
                            onChange={(e) => updateHotel(hotelIndex, 'location', e.target.value)}
                            placeholder="City/Area"
                            className="input-field text-sm"
                          />
                        </div>   */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* @custom-edit-block: == END == */}

          {/* Activities */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                <FiActivity />
                <span>Activities</span>
              </h4>
              <button
                onClick={addActivity}
                className="text-sm btn-primary inline-flex items-center space-x-1"
              >
                <FiPlus size={14} />
                <span>Add Activity</span>
              </button>
            </div>

            {day.activities?.length === 0 || !day.activities ? (
              <p className="text-gray-500 text-sm">No activities added yet</p>
            ) : (
              <div className="space-y-3">
                {day.activities.map((activity, actIndex) => (
                  <div key={actIndex} className="p-4 bg-white rounded-lg border border-gray-200">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-medium text-gray-700">Activity {actIndex + 1}</span>
                      <button
                        onClick={() => deleteActivity(actIndex)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <FiTrash2 size={14} />
                      </button>
                    </div>
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="label text-xs">Activity Name</label>
                          <input
                            type="text"
                            value={activity.name}
                            onChange={(e) => updateActivity(actIndex, 'name', e.target.value)}
                            placeholder="e.g., Visit Eiffel Tower"
                            className="input-field text-sm"
                          />
                        </div>
                        <div>
                          <label className="label text-xs">Time</label>
                          <input
                            type="time"
                            value={activity.time}
                            onChange={(e) => updateActivity(actIndex, 'time', e.target.value)}
                            className="input-field text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="label text-xs">Category</label>
                        <select
                          value={activity.category}
                          onChange={(e) => updateActivity(actIndex, 'category', e.target.value)}
                          className="input-field text-sm"
                        >
                          <option value="Sightseeing">Sightseeing</option>
                          <option value="Adventure">Adventure</option>
                          <option value="Food">Food</option>
                          <option value="Shopping">Shopping</option>
                          <option value="Relaxation">Relaxation</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="label text-xs">Description</label>
                        <textarea
                          value={activity.description}
                          onChange={(e) => updateActivity(actIndex, 'description', e.target.value)}
                          placeholder="Activity details..."
                          rows="2"
                          className="input-field text-sm resize-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DayAccordionForm;