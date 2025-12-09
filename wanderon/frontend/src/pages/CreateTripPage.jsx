/* ------------------------------------------------------------
   Page      : CreateTripPage.jsx
   Purpose   : This page is to build custom itineraries
   References: 
    1. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    2. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    3. ChatGPT:
          Prompt 1             : I have added some buttons and heading in the code. Match the CSS
                                 as shown in the image.
          Prompt 2             : I have added the container to show error. Match the css as shown
                                 in the image.
          Prompt 3             : I am provining you the form I have created. Match the css as shown
                                 in the image. Split the screen into two. Left side (40%) forms should
                                 be shown. Right side (60%) Live Itinerary preview component should render
                                 Provide the CSS for this layout.                    
-------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import BasicTripInfoForm from "../components/forms/BasicTripInfoForm";
import DayAccordionForm from "../components/forms/DayAccordionForm";
import LiveItineraryPreview from "../components/itinerary/LiveItineraryPreview";
import Footer from "../components/layout/Footer";
import { FiPlus, FiTrash2, FiCopy, FiSave } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { getItineraryById, mockDelay } from "../data/dummyData";

const CreateTripPage = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [itinerary, setItinerary] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    summary: '',
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    days: [],
  });

  useEffect(() => {
    if (id) {
      fetchItinerary();
    }
  }, [id]);

  // For Edit logic
  const fetchItinerary = async () => {
    try {
      setLoading(true);
      await mockDelay(300);

      const data = getItineraryById(id);
      if (data) {
        setItinerary(data);
      } else {
        setError("Itinerary not found");
      }
    } catch (error) {
      setError("Failed to load itinerary");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

    //@custom-edit-block ==START==
  const handleBasicInfoChange = (field, value) => {
    console.log("Field: ", field);
    console.log("Value: ", value);
    setItinerary({ ...itinerary, [field]: value });
  };
  //@custom-edit-block ==END==

  const addDay = () => {
    const newDay = {
      dayNumber: itinerary.days.length + 1,
      title: `Day ${itinerary.days.length + 1}`,
      date: '',
      transfer: {
        mode: null,
        from: '',
        to: '',
        departureTime: '',
        arrivalTime: '',
      },
      accommodation: {
        hotelName: '',
        category: "Standard",
        checkIn: '',
        checkOut: '',
      },
      activities: [],
      autoDescription: '',
    };

    setItinerary({
      ...itinerary,
      days: [...itinerary.days, newDay],
    });
  };

  const updateDay = (dayIndex, updatedDay) => {
    const newDays = [...itinerary.days];
    newDays[dayIndex] = updatedDay;
    setItinerary({ ...itinerary, days: newDays });
  };

  const deleteDay = (dayIndex) => {
    const newDays = itinerary.days.filter((_, index) => index !== dayIndex);
    // Renumber days
    newDays.forEach((day, index) => {
      day.dayNumber = index + 1;
      if (!day.title || day.title.match(/^Day \d+$/)) {
        day.title = `Day ${index + 1}`;
      }
    });
    setItinerary({ ...itinerary, days: newDays });
  };


    const duplicateDay = (dayIndex) => {
    const dayToDuplicate = { ...itinerary.days[dayIndex] };
    const newDay = {
      ...dayToDuplicate,
      dayNumber: itinerary.days.length + 1,
      title: `${dayToDuplicate.title} (Copy)`,
      activities: [...dayToDuplicate.activities]
    };
    setItinerary({
      ...itinerary,
      days: [...itinerary.days, newDay]
    });
  };


    const saveItinerary = async (status = 'draft') => {
    setLoading(true);
    setError('');

    try {
      await mockDelay(500);
      
      const dataToSave = {
        ...itinerary,
        status
      };

      // In dummy data mode so simulating the save
      console.log('Saved itinerary (dummy mode):', dataToSave);
      
      if (id) {
        alert(`Itinerary updated successfully! (Status: ${status})`);
      } else {
        // Simulate creating new itinerary
        const newId = 'itin-' + Date.now();
        alert(`Itinerary created successfully! (Status: ${status})`);
        navigate(`/itinerary-builder/${newId}`);
      }
    } catch (err) {
      setError('Failed to save itinerary', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {"Create New Itinerary"}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Build your perfect travel itinerary day by day
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => {}}
                disabled={loading}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <FiSave />
                <span>Save Draft</span>
              </button>
              <button
                onClick={() => {}}
                disabled={loading}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FiSave />
                <span>Publish</span>
              </button>
            </div>
          </div>

          {/* Error will be shown here */}

          {error && (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                {error}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Panel - Form (40%) */}

          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <BasicTripInfoForm />

            {/* Days List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Days</h3>
                <button
                  onClick={addDay}
                  className="btn-primary inline-flex items-center space-x-2 text-sm"
                >
                  <FiPlus />
                  <span>Add Day</span>
                </button>
              </div>

              {itinerary.days.length === 0 ? (
                <div className="card p-8 text-center">
                  <p className="text-gray-600 mb-4">No days added yet</p>
                  <button onClick={addDay} className="btn-primary">
                    Add Your First Day
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {itinerary.days.map((day, index) => (
                    <DayAccordionForm 
                      key={index} 
                      day={day} 
                      dayIndex={index}
                      onUpdate={(updatedDay) => updateDay(index, updatedDay)}
                      onDelete={() => deleteDay(index)}
                      onDuplicate={() => duplicateDay(index)} />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Panel - Preview (60%) */}
          <div className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
            <LiveItineraryPreview itinerary={itinerary} />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateTripPage;
