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

import React from "react";
import BasicTripInfoForm from "../components/forms/BasicTripInfoForm";
import DayAccordionForm from "../components/forms/DayAccordionForm";
import LiveItineraryPreview from "../components/itinerary/LiveItineraryPreview";
import Footer from "../components/layout/Footer";
import { FiPlus, FiTrash2, FiCopy, FiSave } from "react-icons/fi";

const CreateTripPage = () => {
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
              <button className="btn-secondary inline-flex items-center space-x-2">
                <FiSave />
                <span>Save Draft</span>
              </button>
              <button className="btn-primary inline-flex items-center space-x-2">
                <FiSave />
                <span>Publish</span>
              </button>
            </div>
          </div>
          {/* Error will be shown here */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              Error
            </div>
          </div>
        </div>
      </div>

      {/* Split Screen Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Panel - Form (40%) */}

          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <BasicTripInfoForm />

            {/* Days Form */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">Days</h3>
                <button className="btn-primary inline-flex items-center space-x-2 text-sm">
                  <FiPlus />
                  <span>Add Day</span>
                </button>
              </div>

              <div className="card p-8 text-center">
                <p className="text-gray-600 mb-4">No days added yet</p>
                <button className="btn-primary">
                  Add Your First Day
                </button>
              </div>

              <div className="space-y-4">
                <DayAccordionForm />
              </div>

              
              
            </div>
          </div>

          {/* Right Panel - Preview (60%) */}
              <div className="lg:col-span-3 lg:sticky lg:top-32 lg:self-start">
                <LiveItineraryPreview />
              </div>
              
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CreateTripPage;
