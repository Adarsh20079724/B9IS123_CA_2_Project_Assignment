/* ------------------------------------------------------------
   Page      : LandingPage.jsx
   Purpose   : Landing/Home Page for the Website
   References: 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Landing page.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import React from 'react';
import { FiArrowRight, FiMapPin, FiClock } from 'react-icons/fi';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/layout/HeroSection';
import NewsLetter from '../components/layout/NewsLetter';
import { ExistingTrips } from '../data/dummyData';
import ItineraryCard from '../components/sharedComponents/ItineraryCard';

const LandingPage = () => {

console.log("Existing trips: ",ExistingTrips);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <>
        <HeroSection />
      </>

      {/* Top Destinations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Top Destinations</h2>
          <div className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 cursor-pointer">
            <span>Explore all destinations</span>
            <FiArrowRight />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          {[
            'Popular',
            'USA',
            'Europe',
            'Asia',
            'Africa & Middle East',
            'Asia-Pacific & The Pacific',
            'Canada',
            'More +',
          ].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors hover:bg-gray-100"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Static Destination Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ExistingTrips.map((trip) => (
                <ItineraryCard key={trip.id} trip={trip}/>
              ))}
        </div>
      </section>

      {/* Latest Stories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Stories</h2>
          <div className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 cursor-pointer">
            <span>Read more stories</span>
            <FiArrowRight />
          </div>
        </div>

        {/* Static Story Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card group overflow-hidden">
              <div className="h-48 overflow-hidden bg-gray-200" />
              <div className="p-6">
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                  <FiMapPin size={12} />
                  <span>Sample Destination</span>
                  <span>•</span>
                  <FiClock size={12} />
                  <span>5 days</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                  Inspiring Journey #{i} Through Hidden Landscapes
                </h3>
                <p className="text-sm text-gray-600 line-clamp-3">
                  Discover how this traveler uncovered unique experiences and unforgettable
                  memories in a lesser-known part of the world.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <>
        <NewsLetter/>
      </>
          
      {/* Footer */}
      <>
        <Footer />
      </>
    </div>
  );
};

export default LandingPage;