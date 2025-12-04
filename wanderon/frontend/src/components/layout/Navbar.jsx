/* ------------------------------------------------------------
   Component : Navbar.jsx
   Purpose   : Navigation bar for the website
   References: 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Navbar component.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">Logo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
            <span className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer">
              Destinations
            </span>
            <span className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer">
              Itineraries
            </span>
            <span className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer">
              Latest Stories
            </span>
            <span className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer">
              About
            </span>
            <span className="text-gray-700 hover:text-gray-900 font-medium cursor-pointer">
              Blog
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form className="w-full relative">
              <input
                type="text"
                placeholder="Search destinations, trips..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
          </div>

          {/* Right Side (static Sign In button) */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="btn-primary">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button (non-functional, visual only) */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;