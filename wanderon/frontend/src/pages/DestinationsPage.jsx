/* ------------------------------------------------------------
   Page      : DestinationsPage.jsx
   Purpose   : This Page provides all the itineraries as cards.
   References: 
    1. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    2. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    3. Website Inspiration     : https://www.thrillophilia.com/
                               : https://wanderon.in/
    4. ChatGPT Prompt          : Create a Static Page Template which should match the CSS of the project. 
                                 I have attached the image and link for reference. It must have a searchbar, 
                                 Title CSS to adjust footer component inside it. Create this component 
                                 with static data in it for testing purposes. 
-------------------------------------------------------------- */

import React from "react";
import { FiSearch, FiMapPin, FiClock, FiStar } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import ItineraryCard from "../components/sharedComponents/ItineraryCard";

const trips = [
  {
    id: "trip-1",
    title: "Scenic Iceland with Diamond Circle",
    country: "Iceland",
    city: "Reykjavík",
    duration: "7 Days · 6 Nights",
    price: "EUR 2,190.06",
    rating: 4.7,
    reviews: 64,
    thumbnail:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
    highlight: "Includes Golden Circle, whale watching & Diamond Circle tour.",
  },
  {
    id: "trip-2",
    title: "Classic Paris & Swiss Alps Escape",
    country: "France · Switzerland",
    city: "Paris, Interlaken",
    duration: "8 Days · 7 Nights",
    price: "EUR 1,849.00",
    rating: 4.6,
    reviews: 52,
    thumbnail:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
    highlight: "Eiffel Tower, Seine cruise & scenic Swiss mountain rail.",
  },
  {
    id: "trip-3",
    title: "Tokyo & Kyoto Cultural Discovery",
    country: "Japan",
    city: "Tokyo, Kyoto",
    duration: "6 Days · 5 Nights",
    price: "EUR 1,560.50",
    rating: 4.8,
    reviews: 89,
    thumbnail:
      "https://images.unsplash.com/photo-1519183071298-a2962be90b8e?auto=format&fit=crop&w=800&q=80",
    highlight: "Temples, neon streets, local food tours & bullet train ride.",
  },
  {
    id: "trip-4",
    title: "Jaipur, Jodhpur & Jaisalmer Desert Trail",
    country: "India",
    city: "Jaipur, Jodhpur, Jaisalmer",
    duration: "9 Days · 8 Nights",
    price: "EUR 980.00",
    rating: 4.5,
    reviews: 41,
    thumbnail:
      "https://images.unsplash.com/photo-1515023115689-589c33041d3c?auto=format&fit=crop&w=800&q=80",
    highlight: "Forts, bazaars & one night in luxury desert camp.",
  },
];

const DestinationsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Page content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Header + Search */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Explore Destinations
            </h1>
            <p className="text-gray-600 mb-6">
              Discover curated trips across the world and find the perfect
              itinerary for your next adventure.
            </p>

            <div className="w-full md:max-w-xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations, trips or experiences..."
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Filters (UI only) */}
          <div className="card p-4 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="label text-xs">Country</label>
                <select className="input-field text-sm">
                  <option>All Countries</option>
                  <option>Iceland</option>
                  <option>France</option>
                  <option>Switzerland</option>
                  <option>Japan</option>
                  <option>India</option>
                </select>
              </div>

              <div>
                <label className="label text-xs">City</label>
                <select className="input-field text-sm">
                  <option>Any City</option>
                  <option>Reykjavík</option>
                  <option>Paris</option>
                  <option>Tokyo</option>
                  <option>Jaipur</option>
                </select>
              </div>

              <div>
                <label className="label text-xs">Duration</label>
                <select className="input-field text-sm">
                  <option>Any Duration</option>
                  <option>3–5 Days</option>
                  <option>6–8 Days</option>
                  <option>9+ Days</option>
                </select>
              </div>

              <div className="flex md:justify-end">
                <button className="btn-primary w-full md:w-auto px-6 py-2.5">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Trips Grid */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Available Trips
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trips.map((trip) => (
                <ItineraryCard key={trip.id} trip={trip}/>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer (already in your project) */}
      <Footer />
    </div>
  );
};

export default DestinationsPage;