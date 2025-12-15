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
import DayAccordionForm from "../components/forms/DayAccordionForm";
import LiveItineraryPreview from "../components/itinerary/LiveItineraryPreview";
import Footer from "../components/layout/Footer";
import { FiPlus, FiSave, FiSend } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
// @custom-edit-block: == START ==
import { useItinerary } from "../context/ItineraryContext";
import { useAuth } from "../context/AuthContext";
// @custom-edit-block: == END ==

const CreateTripPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // @custom-edit-block: == START ==
  const { user } = useAuth();
  const {
    currentItinerary,
    loading: contextLoading,
    error: contextError,
    fetchItineraryById,
    createItinerary,
    updateItinerary,
    clearCurrentItinerary,
    clearError
  } = useItinerary();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [itinerary, setItinerary] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    summary: '',
    thumbnail: "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
    expectedBudget: 0,
    days: [],
  });

  // Load itinerary for editing
  useEffect(() => {
    if (id) {
      fetchItineraryById(id);
    }
    
    return () => {
      clearCurrentItinerary();
      clearError();
    };
  }, [id]);

  // Populate form when currentItinerary is loaded
  useEffect(() => {
    if (currentItinerary && id) {
      setItinerary({
        title: currentItinerary.title || '',
        destination: currentItinerary.destination || '',
        startDate: currentItinerary.startDate || '',
        endDate: currentItinerary.endDate || '',
        summary: currentItinerary.summary || '',
        thumbnail: currentItinerary.thumbnail || "https://images.unsplash.com/photo-1488646953014-85cb44e25828",
        expectedBudget: currentItinerary.expectedBudget || 0,
        days: currentItinerary.days || [],
      });
    }
  }, [currentItinerary, id]);

  // Show context error
  useEffect(() => {
    if (contextError) {
      setError(contextError);
    }
  }, [contextError]);

  const handleFormChanges = (field, value) => {
    setItinerary({ ...itinerary, [field]: value });
  };
  // @custom-edit-block: == END ==

  const addDay = () => {
    const newDay = {
      dayNumber: itinerary.days.length + 1,
      title: `Day ${itinerary.days.length + 1}`,
      date: '',
      // @custom-edit-block: == START ==
      transfer: [],
      accommodation: [],
      activities: [],
      flights: [],
      meals: []
      // @custom-edit-block: == END ==
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
      // @custom-edit-block: == START ==
      activities: dayToDuplicate.activities ? [...dayToDuplicate.activities] : [],
      transfer: dayToDuplicate.transfer ? [...dayToDuplicate.transfer] : [],
      accommodation: dayToDuplicate.accommodation ? [...dayToDuplicate.accommodation] : [],
      flights: dayToDuplicate.flights ? [...dayToDuplicate.flights] : [],
      meals: dayToDuplicate.meals ? [...dayToDuplicate.meals] : []
      // @custom-edit-block: == END ==
    };
    setItinerary({
      ...itinerary,
      days: [...itinerary.days, newDay]
    });
  };

  // @custom-edit-block: == START ==
  // Calculate duration and statistics
  const calculateDuration = () => {
    if (itinerary.startDate && itinerary.endDate) {
      const start = new Date(itinerary.startDate);
      const end = new Date(itinerary.endDate);
      const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      return diff > 0 ? diff : 0;
    }
    return itinerary.days.length || 0;
  };

  const calculateStatistics = () => {
    let totalActivities = 0;
    let totalTransfers = 0;
    let totalHotels = 0;
    let totalFlights = 0;

    itinerary.days.forEach(day => {
      totalActivities += day.activities?.length || 0;
      totalTransfers += day.transfer?.length || 0;
      totalHotels += day.accommodation?.length || 0;
      totalFlights += day.flights?.length || 0;
    });

    return {
      totalActivities,
      totalTransfers,
      totalHotels,
      totalFlights
    };
  };

  const validateItinerary = () => {
    const errors = [];

    if (!itinerary.title?.trim()) {
      errors.push('Trip title is required');
    }
    if (!itinerary.destination?.trim()) {
      errors.push('Destination is required');
    }
    if (!itinerary.startDate) {
      errors.push('Start date is required');
    }
    if (!itinerary.endDate) {
      errors.push('End date is required');
    }
    if (itinerary.startDate && itinerary.endDate) {
      const start = new Date(itinerary.startDate);
      const end = new Date(itinerary.endDate);
      if (end < start) {
        errors.push('End date must be after start date');
      }
    }

    return errors;
  };

  const saveItinerary = async (status = 'draft') => {
    setLoading(true);
    setError('');
    clearError();

    try {
      // Validate
      const validationErrors = validateItinerary();
      if (validationErrors.length > 0) {
        setError(validationErrors.join(', '));
        setLoading(false);
        return;
      }

      // Prepare data
      const dataToSave = {
        ...itinerary,
        userId: user._id,
        status,
        duration: calculateDuration(),
        statistics: calculateStatistics(),
        isPublic: status === 'published'
      };

      let result;
      if (id) {
        // Update existing
        result = await updateItinerary(id, dataToSave);
      } else {
        // Create new
        result = await createItinerary(dataToSave);
      }

      if (result.success) {
        alert(`Itinerary ${id ? 'updated' : 'created'} successfully! (Status: ${status})`);
        navigate('/my-trips');
      } else {
        setError(result.message || 'Failed to save itinerary');
      }
    } catch (err) {
      setError('Failed to save itinerary');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  // @custom-edit-block: == END ==

  // @custom-edit-block: == START ==
  // Loading state while fetching itinerary
  if (id && contextLoading && !currentItinerary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading itinerary...</p>
        </div>
      </div>
    );
  }
  // @custom-edit-block: == END ==

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {id ? 'Edit Itinerary' : 'Create New Itinerary'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Build your perfect travel itinerary day by day
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => saveItinerary('draft')}
                disabled={loading || contextLoading}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <FiSave />
                <span>{loading ? 'Saving...' : 'Save Draft'}</span>
              </button>
              <button
                onClick={() => saveItinerary('published')}
                disabled={loading || contextLoading}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FiSend />
                <span>{loading ? 'Publishing...' : 'Publish'}</span>
              </button>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="mt-4">
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex justify-between items-center">
                <span>{error}</span>
                <button
                  onClick={() => setError('')}
                  className="text-red-700 hover:text-red-900"
                >
                  ✕
                </button>
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
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>

              <div className="space-y-4">
                <div>
                  <label className="label">Trip Title *</label>
                  <input
                    type="text"
                    value={itinerary.title}
                    onChange={(e) => handleFormChanges('title', e.target.value)}
                    placeholder="e.g., Amazing Europe Adventure"
                    className="input-field"
                  />
                </div>

                <div>
                  <label className="label">Destination *</label>
                  <input
                    type="text"
                    value={itinerary.destination}
                    onChange={(e) => handleFormChanges('destination', e.target.value)}
                    placeholder="e.g., Paris, France"
                    className="input-field"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="label">Start Date *</label>
                    <input
                      type="date"
                      value={itinerary.startDate?.split('T')[0] || ''}
                      onChange={(e) => handleFormChanges('startDate', e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="label">End Date *</label>
                    <input
                      type="date"
                      value={itinerary.endDate?.split('T')[0] || ''}
                      onChange={(e) => handleFormChanges('endDate', e.target.value)}
                      className="input-field"
                    />
                  </div>
                </div>

                {/* @custom-edit-block: == START == */}
                <div>
                  <label className="label">Expected Budget (USD)</label>
                  <input
                    type="number"
                    value={itinerary.expectedBudget || 0}
                    onChange={(e) => handleFormChanges('expectedBudget', parseFloat(e.target.value) || 0)}
                    placeholder="0"
                    className="input-field"
                    min="0"
                  />
                </div>
                {/* @custom-edit-block: == END == */}

                <div>
                  <label className="label">Summary</label>
                  <textarea
                    value={itinerary.summary}
                    onChange={(e) => handleFormChanges('summary', e.target.value)}
                    placeholder="Brief description of your trip..."
                    rows="3"
                    className="input-field resize-none"
                  />
                </div>
              </div>
            </div>

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
                      onDuplicate={() => duplicateDay(index)}
                    />
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