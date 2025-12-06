/* ------------------------------------------------------------
   Page      : ContactPage.jsx
   Purpose   : This is a static contact us page. No functionality is implemented currently.
   References: 
    1. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    2. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. ChatGPT Prompt          : Create a Static Contact us page Component which should match the CSS of 
                                 the project. 
-------------------------------------------------------------- */

import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        
        {/* Contact Card */}
        <div className="card p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
            Contact Us
          </h1>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="label">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input-field"
              />
            </div>

            {/* Email */}
            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input-field"
              />
            </div>

            {/* Message */}
            <div>
              <label className="label">Message</label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="input-field resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="button"
              className="btn-primary w-full py-3 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;