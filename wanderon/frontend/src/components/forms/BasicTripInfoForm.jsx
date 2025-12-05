/* ------------------------------------------------------------
   Form      : BasicTripInfoForm.jsx
   Purpose   : This is a form used to create basic info of the itinerary 
   References: 
    1. ChatGPT Prompt          : Create a Basic form which has basic details of the trip to be created. 
                                 It should nopt have more than 4 fields Css should be inspired from the 
                                 provided image. Keep the component static. Add Icons from react-icons 
                                 library. 
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
-------------------------------------------------------------- */

const BasicTripInfoForm = () => {

  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Basic Information
      </h3>

      <div className="space-y-4">
        {/* Trip Title (Static Input) */}
        <div>
          <label className="label">Trip Title</label>
          <input
            type="text"
            placeholder="e.g., Amazing Europe Adventure"
            className="input-field"
          />
        </div>

        {/* Destination (Static Input) */}
        <div>
          <label className="label">Destination</label>
          <input
            type="text"
            placeholder="e.g., Paris, France"
            className="input-field"
          />
        </div>

        {/* Dates (Static Inputs) */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="label">Start Date</label>
            <input type="date" className="input-field" />
          </div>
          <div>
            <label className="label">End Date</label>
            <input type="date" className="input-field" />
          </div>
        </div>

        {/* Summary (Static Textarea) */}
        <div>
          <label className="label">Summary</label>
          <textarea
            placeholder="Brief description of your trip..."
            rows="3"
            className="input-field resize-none"
          />
        </div>
      </div>
    </div>
  );
};

export default BasicTripInfoForm;
