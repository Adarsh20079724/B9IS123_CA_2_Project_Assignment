/* ------------------------------------------------------------
   Form      : DayAccordionForm.jsx
   Purpose   : This is a form used to create itinerary 
   References: 
    1. ChatGPT Prompt          : Create a form which takes day details, Transportation details, Accommodation 
                                 Details and Activity details. All the details should be wrapped up in an accordion. 
                                 Css should be inspired from the provided image. Keep the component static. Add 
                                 Icons from react-icons library.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import { 
  FiChevronDown, 
  FiTrash2, 
  FiCopy, 
  FiPlus,
  FiMapPin,
  FiHome,
  FiActivity
} from 'react-icons/fi';

const DayAccordionForm = () => {
  return (
    <div className="card overflow-hidden">

      {/* Header (Static) */}
      <div className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
        <div className="flex justify-between items-center">

          {/* Left Title Section */}
          <div className="flex items-center space-x-3">
            <span className="font-semibold text-gray-900">Day 1</span>
            <span className="text-gray-600">-</span>
            <span className="text-gray-700">Sample Day Title</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">

            {/* Indicators */}
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <FiMapPin size={14} />
                <span>1</span>
              </span>
              <span className="flex items-center space-x-1">
                <FiHome size={14} />
                <span>1</span>
              </span>
              <span className="flex items-center space-x-1">
                <FiActivity size={14} />
                <span>3</span>
              </span>
            </div>

            {/* Buttons (Static visual only) */}
            <div className="flex items-center space-x-2">
              <button className="p-1.5 hover:bg-gray-200 rounded transition-colors">
                <FiCopy size={16} />
              </button>
              <button className="p-1.5 hover:bg-red-50 text-red-600 rounded transition-colors">
                <FiTrash2 size={16} />
              </button>

              {/* Static Chevron */}
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Section (Always shown statically) */}
      <div className="p-6 border-t border-gray-100 space-y-6 bg-gray-50">

        {/* Day Title & Date */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Day Title</label>
            <input
              type="text"
              placeholder="e.g., Arrival in Paris"
              className="input-field"
            />
          </div>
          <div>
            <label className="label">Date</label>
            <input
              type="date"
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
              <select className="input-field">
                <option value="">None</option>
                <option value="Flight">Flight</option>
                <option value="Train">Train</option>
                <option value="Bus">Bus</option>
                <option value="Car">Car</option>
                <option value="Taxi">Taxi</option>
                <option value="Ferry">Ferry</option>
              </select>
            </div>

            {/* Static Transfer Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">From</label>
                <input type="text" className="input-field" placeholder="Departure location" />
              </div>
              <div>
                <label className="label">To</label>
                <input type="text" className="input-field" placeholder="Arrival location" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="label">Departure Time</label>
                <input type="time" className="input-field" />
              </div>
              <div>
                <label className="label">Arrival Time</label>
                <input type="time" className="input-field" />
              </div>
            </div>
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
              <input type="text" className="input-field" placeholder="Enter hotel name" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="label">Category</label>
                <select className="input-field">
                  <option value="Budget">Budget</option>
                  <option value="Standard">Standard</option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              <div>
                <label className="label">Check-in</label>
                <input type="time" className="input-field" />
              </div>
              <div>
                <label className="label">Check-out</label>
                <input type="time" className="input-field" />
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
            <button className="text-sm btn-primary inline-flex items-center space-x-1">
              <FiPlus size={14} />
              <span>Add Activity</span>
            </button>
          </div>

          {/* Static placeholder activities */}
          <div className="space-y-3">
            {[1, 2].map((n) => (
              <div key={n} className="p-4 bg-white rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-medium text-gray-700">Activity {n}</span>
                  <button className="text-red-600 hover:text-red-700">
                    <FiTrash2 size={14} />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label text-xs">Activity Name</label>
                      <input type="text" className="input-field text-sm" placeholder="e.g., Visit Eiffel Tower" />
                    </div>
                    <div>
                      <label className="label text-xs">Time</label>
                      <input type="time" className="input-field text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="label text-xs">Category</label>
                    <select className="input-field text-sm">
                      <option>Sightseeing</option>
                      <option>Adventure</option>
                      <option>Dining</option>
                      <option>Shopping</option>
                      <option>Relaxation</option>
                      <option>Cultural</option>
                    </select>
                  </div>

                  <div>
                    <label className="label text-xs">Description</label>
                    <textarea
                      placeholder="Activity details..."
                      rows="2"
                      className="input-field text-sm resize-none"
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DayAccordionForm;