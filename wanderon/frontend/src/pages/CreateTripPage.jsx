/* ------------------------------------------------------------
   Page      : CreateTripPage.jsx
   Purpose   : This page is to build custom itineraries
   References: 
    1. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    2. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    3. ChatGPT:
          Prompt 1             : I have added some buttons and heading in the code. Match the CSS
                                 as shown in the image.
-------------------------------------------------------------- */

import React from 'react'
import BasicTripInfoForm from '../components/forms/BasicTripInfoForm'
import DayAccordionForm from '../components/forms/DayAccordionForm'
import LiveItineraryPreview from '../components/itinerary/LiveItineraryPreview'
import Footer from '../components/layout/Footer'
import { FiPlus, FiTrash2, FiCopy, FiSave } from 'react-icons/fi';

const CreateTripPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {'Create New Itinerary'}
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                Build your perfect travel itinerary day by day
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <FiSave />
                <span>Save Draft</span>
              </button>
              <button
                className="btn-primary inline-flex items-center space-x-2"
              >
                <FiSave />
                <span>Publish</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <BasicTripInfoForm />
      <DayAccordionForm />
      <LiveItineraryPreview />
      <Footer />

    </div>
  )
}

export default CreateTripPage