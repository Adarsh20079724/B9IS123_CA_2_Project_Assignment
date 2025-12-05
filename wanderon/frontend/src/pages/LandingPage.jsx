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

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Discover the World's <span className="text-gray-600">Hidden</span> Wonders
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Find the unique materials and hidden gems that inspire your curiosity.
                From remote locations to undiscovered places, turn every journey into
                an unforgettable story.
              </p>
              <button className="btn-primary inline-flex items-center space-x-2">
                <span>Explore now</span>
                <FiArrowRight />
              </button>
            </div>

            {/* Right Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828"
                    alt="Travel destination"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1"
                    alt="Travel destination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1530789253388-582c481c54b0"
                    alt="Travel destination"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="h-48 bg-gray-200 rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
                    alt="Travel destination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="card h-64 overflow-hidden flex flex-col">
              <div className="h-36 bg-gray-200" />
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-900 mb-1">
                  Destination {i}
                </h3>
                <p className="text-sm text-gray-600 flex-1">
                  A beautiful place to explore and discover hidden gems.
                </p>
              </div>
            </div>
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
      <section className="bg-gray-200 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get Your Travel Inspiration Straight to Your Inbox
          </h2>
          <form className="flex flex-col sm:flex-row gap-4 mt-8">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500"
            />
            <button type="button" className="btn-primary">
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-600 mt-4">
            Subscribe to our newsletter and get the latest travel tips delivered to your inbox
          </p>
        </div>
      </section>

      {/* Footer */}
      <>
        <Footer />
      </>
    </div>
  );
};

export default LandingPage;