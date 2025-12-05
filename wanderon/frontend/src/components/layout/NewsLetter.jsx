/* ------------------------------------------------------------
   Component  : NewsLetter.jsx
   Purpose    : News Letter Section for the Landing Page. (Seperated from Landing page)
   References : 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Landing page.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
--------------------------------------------------------------*/

import React from 'react'

const NewsLetter = () => {
  return (
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
  )
}

export default NewsLetter;