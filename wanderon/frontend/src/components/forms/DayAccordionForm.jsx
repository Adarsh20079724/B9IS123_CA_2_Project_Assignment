/* ------------------------------------------------------------
   Form      : DayAccordionForm.jsx
   Purpose   : This is a form used to create days in itinerary 
   References: 
    1. ChatGPT Prompt          : Create a form which takes day details, Transportation details, Accommodation 
                                 Details and Activity details. All the details should be wrapped up in an accordion. 
                                 Css should be inspired from the provided image. Keep the component static. Add 
                                 Icons from react-icons library.
                                : Check the bracket error after transportation code block and fix it.
                                : what is e.stopPropogation function. Add it in the delete and 
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

  const handleTransferChange = (field, value) => {
    onUpdate({
      ...day,
      transfer: { ...day.transfer, [field]: value },
    });
  };

  const handleAccommodationChange = (field, value) => {
    onUpdate({
      ...day,
      accommodation: { ...day.accommodation, [field]: value },
    });
  };

const addActivity = () => {
    const newActivity = {
      name: '',
      time: '',
      description: '',
      category: 'Sightseeing'
    };
    onUpdate({
      ...day,
      activities: [...day.activities, newActivity]
    });
  };

    const updateActivity = (activityIndex, field, value) => {
    const newActivities = [...day.activities];
    newActivities[activityIndex] = {
      ...newActivities[activityIndex],
      [field]: value
    };
    onUpdate({ ...day, activities: newActivities });
  };

    const deleteActivity = (activityIndex) => {
    const newActivities = day.activities.filter((_, index) => index !== activityIndex);
    onUpdate({ ...day, activities: newActivities });
  };

    const transferCount = day.transfer?.mode ? 1 : 0;   // optional chaining so that it will not result into an error but show undefined value
  const hotelCount = day.accommodation?.hotelName ? 1 : 0;
  const activityCount = day.activities?.length || 0;


  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div 
      onClick={() => setIsExpanded(!isExpanded)}
      className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">

        <div className="flex justify-between items-center">
          {/* Left Title Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
            <span className="font-semibold text-gray-900">
              Day {day.dayNumber}
            </span>
            <span className="text-gray-600">-</span>
            <span className="text-gray-700">
              {day.title || "Your Trip Title"}
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
            )
            }

              {/* Hotel Count */}
              {hotelCount > 0 && (
                <span className="flex items-center space-x-1">
                <FiHome size={14} />
                <span>{hotelCount}</span>
              </span>
            )
            }

              {/* activityCount */}
              {activityCount > 0 && (<span className="flex items-center space-x-1">
                <FiActivity size={14} />
                <span>{activityCount}</span>
              </span>)}
            </div>

            {/* Buttons */}
            <div className="flex items-center space-x-2">

              {/* Duplicate Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();   // Help taken from ChatGPT 
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

              {/* Chevron to expand accordio*/}
              {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>
        </div>
      </div>

       {/* Expanded Section (Always shown statically) */}
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

          {/* Transportation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <FiMapPin />
              <span>Transportation</span>
            </h4>

            <div className="space-y-3">
              <div>
                <label className="label">Mode of Transfer</label>
                <select
                  value={day.transfer?.mode || ""}
                  onChange={(e) =>
                    handleTransferChange("mode", e.target.value || null)
                  }
                  className="input-field"
                >
                  {/* Later action to be done: Shift these to a constant file and map over the array to reduce line space */}
                  <option value="">None</option>
                  <option value="Flight">Flight</option>
                  <option value="Train">Train</option>
                  <option value="Bus">Bus</option>
                  <option value="Car">Car</option>
                  <option value="Taxi">Taxi</option>
                  <option value="Ferry">Ferry</option>
                </select>
              </div>

              {/* Transfer Fields */}
              {day.transfer?.mode && (
              <>
                <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">From</label>
                  <input
                    type="text"
                    value={day.transfer.from}
                    onChange={(e) =>
                      handleTransferChange("from", e.target.value)
                    }
                    placeholder="Departure location"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label">To</label>
                  <input
                    type="text"
                    value={day.transfer.to}
                    onChange={(e) => handleTransferChange("to", e.target.value)}
                    placeholder="Arrival location"
                    className="input-field"
                  />
                </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Departure Time</label>
                  <input
                    type="time"
                    value={day.transfer.departureTime}
                    onChange={(e) => handleTransferChange("departureTime", e.target.value)}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="label">Arrival Time</label>
                  <input
                    type="time"
                    value={day.transfer.arrivalTime}
                    onChange={(e) => handleTransferChange("arrivalTime", e.target.value)}
                    className="input-field"
                  />
                </div>
                </div>
              </>
              )}
            </div>
          </div>

          {/* Accommodation */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
              <FiHome />
              <span>Accommodation</span>
            </h4>

            <div className="space-y-3">
              <div>
                <label className="label">Hotel Name</label>
                <input
                  type="text"
                  value={day.accommodation?.hotelName || ''}
                  onChange={(e) => handleAccommodationChange('hotelName', e.target.value)}
                  placeholder="Enter hotel name"
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="label">Category</label>
                  <select 
                    value={day.accommodation?.category || 'Standard'}
                    onChange={(e) => handleAccommodationChange('category', e.target.value)}
                    className="input-field"
                  >
                    {/* Will be fetched from constant file */}
                    <option value="Budget">Budget</option>
                    <option value="Standard">Standard</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Luxury">Luxury</option>
                  </select>
                </div>
                <div>
                  <label className="label">Check-in</label>
                  <input 
                    type="time"
                    value={day.accommodation?.checkIn || ''}
                    onChange={(e) => handleAccommodationChange('checkIn', e.target.value)}
                    className="input-field"                  
                    />
                </div>
                <div>
                  <label className="label">Check-out</label>
                  <input 
                    type="time"
                    value={day.accommodation?.checkOut || ''}
                    onChange={(e) => handleAccommodationChange('checkOut', e.target.value)}
                    className="input-field"
                    />
                </div>
              </div>
            </div>
          </div>

          {/* Activities */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                <FiActivity />
                <span>Activities</span>
              </h4>

              {/* Static Add Button */}
              <button 
                onClick={addActivity}
                className="text-sm btn-primary inline-flex items-center space-x-1">
                <FiPlus size={14} />
                <span>Add Activity</span>
              </button>
            </div>

            {/* Activities mapping*/}
            {day.activities?.length === 0 ? (
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
                          <option value="Dining">Dining</option>
                          <option value="Shopping">Shopping</option>
                          <option value="Relaxation">Relaxation</option>
                          <option value="Cultural">Cultural</option>
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
