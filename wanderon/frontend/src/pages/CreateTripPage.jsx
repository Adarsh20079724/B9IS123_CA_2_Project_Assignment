/* ------------------------------------------------------------
   Page      : CreateTripPage.jsx
   Purpose   : This page is to build custom itineraries
   References: 
    1. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    2. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    3. ChatGPT                 : Prompt will be updated if used. 
-------------------------------------------------------------- */

import React from 'react'
import BasicTripInfoForm from '../components/forms/BasicTripInfoForm'
import DayAccordionForm from '../components/forms/DayAccordionForm'
import LiveItineraryPreview from '../components/itinerary/LiveItineraryPreview'
import Footer from '../components/layout/Footer'

const CreateTripPage = () => {
  return (
    <div>
      <BasicTripInfoForm />
      <DayAccordionForm />
      <LiveItineraryPreview />
      <Footer />

    </div>
  )
}

export default CreateTripPage