/* ------------------------------------------------------------
   Component  : HeroSection.jsx
   Purpose    : Hero Section for the Landing Page. (Seperated from Landing page)
   References : 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Landing page.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
--------------------------------------------------------------*/

import React from 'react'

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection