/* ------------------------------------------------------------
   Component  : Footer.jsx
   Purpose    : Footer for the Landing Page. (Seperated from Landing page)
   References : 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Landing page.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
--------------------------------------------------------------*/

import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Logo</h3>
              <p className="text-sm text-gray-400">Follow us on:</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="cursor-pointer">About Our Travel</span></li>
                <li><span className="cursor-pointer">Our Team</span></li>
                <li><span className="cursor-pointer">Membership</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Travel Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="cursor-pointer">Online Booking</span></li>
                <li><span className="cursor-pointer">Destinations</span></li>
                <li><span className="cursor-pointer">Adventure Experiences</span></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Our Information</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><span className="cursor-pointer">FAQ</span></li>
                <li><span className="cursor-pointer">Travel Blogs</span></li>
                <li><span className="cursor-pointer">Travel Videos</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 Travel Itinerary. All rights reserved.</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer