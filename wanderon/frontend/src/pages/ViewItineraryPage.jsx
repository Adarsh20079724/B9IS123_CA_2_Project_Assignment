/* ------------------------------------------------------------
   Page      : ViewItineraryPage.jsx
   Purpose   : This page is to show what comprehensive itinerary has been made by the user or
               if there is existing itinerary available then it will just show the summary of it.
   References: 
    1. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    2. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    3. Website Inspiration     : https://www.thrillophilia.com/tours/scenic-iceland-with-diamond-circle
                               : https://wanderon.in/
    4. ChatGPT Prompt          : Create a Trip Summary Component which should match the CSS of the project. 
                                 I have attached the image and link for reference. Create this component 
                                 with static data in it for testing purposes.
-------------------------------------------------------------- */

import React, { useEffect, useState } from "react";
import {
  FiActivity,
  FiMapPin,
  FiHome,
  FiAirplay,
  FiStar,
} from "react-icons/fi";
import Footer from "../components/layout/Footer";
import TripDaySummary from "../components/itinerary/TripDaySummary";
import { useParams } from "react-router-dom";
import { getItineraryById, mockDelay } from "../data/dummyData";

/**
 * Main Trip Summary page:
 * - Left: Trip summary card (70%)
 * - Right: Price / enquiry card (30%)
 */
const ViewItineraryPage = () => {
 
  const [itinerary, setItinerary] = useState({});
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  
  // console.log("id: ",id)


  // Static data shaped for the day component
  const days = [
    {
      dayLabel: "Day 1 – Reykjavík",
      stats: { activities: 1, hotels: 1, transfers: 1, flights: 0 },
      sections: [
        {
          type: "transfer",
          label: "Transfer:",
          text: "Transfer from Keflavík International Airport to Hotel Reykjavík Grand in Reykjavík",
        },
        {
          type: "hotel",
          label: "Hotel:",
          text: "Check-in at Hotel Reykjavík Grand in Reykjavík",
        },
        {
          type: "note",
          title: "Enjoy your time at leisure",
        },
      ],
    },
    {
      dayLabel: "Day 2 – Reykjavík",
      stats: { activities: 1, hotels: 0, transfers: 1, flights: 0 },
      sections: [
        {
          type: "transfer",
          label: "Transfer:",
          text: "Transfer from Hotel Reykjavík Grand in Reykjavík to Hotel Reykjavík Grand in Reykjavík",
        },
        {
          type: "activity",
          label: "Activity:",
          text: "Golden Circle Tour – Golden Circle Tour with transfers at 8 AM on a shared basis",
        },
        {
          type: "meal",
          lines: ["Breakfast at Hotel Reykjavík Grand"],
        },
      ],
    },
    {
      dayLabel: "Day 3 – Reykjavík",
      stats: { activities: 1, hotels: 0, transfers: 0, flights: 0 },
      sections: [
        {
          type: "activity",
          label: "Activity:",
          text: "Reykjavík Whale Watching Tour – Whale watching experience",
        },
        {
          type: "meal",
          lines: ["Breakfast at Hotel Reykjavík Grand"],
        },
      ],
    },
    
    {
      dayLabel: "Day 4 – Akureyri",
      stats: { activities: 1, hotels: 1, transfers: 2, flights: 1 },
      sections: [
        {
          type: "transfer",
          label: "2 Transfers:",
          lines: [
            "Transfer from Hotel Reykjavík Grand in Reykjavík to Reykjavík Airport",
            "Transfer from Akureyri Airport to Hotel Kjarnalundur, Akureyri",
          ],
        },
        {
          type: "flight",
          title: "Flight – Reykjavík Airport to Akureyri Airport",
          meta: {
            start: "03:30 PM",
            end: "04:15 PM",
            duration: "45 Minutes",
          },
        },
        {
          type: "hotel",
          label: "Hotel:",
          text: "Check-in at Hotel Kjarnalundur, Akureyri",
        },
        {
          type: "note",
          title: "Enjoy your time at leisure",
        },
        {
          type: "meal",
          lines: ["Breakfast at Hotel Reykjavík Grand"],
        },
      ],
    },
  ];

  useEffect(() => {
    if (id) fetchItinerary();
    console.log("Itin: ",itinerary)
  }, [id])

  const fetchItinerary = async () => {
    setLoading(true);
      await mockDelay(300); // To test API like fetching scenario

      const data = getItineraryById(id);
      setItinerary(data);
      setLoading(false);
  }

  return (
    <>
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: 70% / 30% on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8">
          {/* LEFT: Trip Summary (≈70%) */}
          <div className="lg:col-span-6">
            <div className="card p-6 space-y-6">
              {/* Header */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Trip Summary
                </h2>

                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                  <span className="inline-flex items-center space-x-2">
                    <FiActivity className="text-gray-500" />
                    <span>3 Activities</span>
                  </span>
                  <span className="inline-flex items-center space-x-2">
                    <FiMapPin className="text-gray-500" />
                    <span>6 Transfers</span>
                  </span>
                  <span className="inline-flex items-center space-x-2">
                    <FiAirplay className="text-gray-500" />
                    <span>1 Flight</span>
                  </span>
                  <span className="inline-flex items-center space-x-2">
                    <FiHome className="text-gray-500" />
                    <span>2 Hotels</span>
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200" />

              {/* Days */}
              <div className="space-y-4">
                {days.map((day, index) => (
                  <React.Fragment key={day.dayLabel}>
                    {index > 0 && (
                      <div
                        className="h-px bg-gray-100 my-1"
                        aria-hidden="true"
                      />
                    )}
                    <TripDaySummary
                      dayLabel={day.dayLabel}
                      stats={day.stats}
                      sections={day.sections}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Price / Enquiry (≈30%) */}
          <div className="lg:col-span-3">
            <div className="card p-6 space-y-6">
              {/* Price + rating + sale badge */}
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-extrabold text-gray-900">
                      EUR 2,190.06
                    </p>
                    <span className="text-sm text-gray-500">Per Adult</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-400 line-through">
                    EUR 2,912.78
                  </p>
                </div>

                <div className="flex flex-col items-end space-y-2">
                  <div className="inline-flex items-center space-x-1 text-sm text-green-600">
                    <FiStar />
                    <span className="font-semibold">4.5</span>
                    <span className="text-gray-500 text-xs">(40)</span>
                  </div>
                  <div className="inline-flex items-center space-x-2">
                    <span className="text-lg">🎅</span>
                    <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold tracking-wide">
                      CHRISTMAS SALE!
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200" />

              {/* Primary CTA */}
              <button className="w-full btn-primary py-3 text-base">
                Send Enquiry
              </button>

              {/* Optional: small summary of package */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <p className="text-sm font-semibold text-gray-900">
                  Scenic Iceland With Diamond Circle
                </p>
                <div className="flex items-center flex-wrap gap-2 text-sm">
                  <span className="font-bold text-gray-900">EUR 2,190.06</span>
                  <span className="text-gray-400 line-through text-xs">
                    EUR 2,912.78
                  </span>
                  <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide">
                    Save EUR 722.72
                  </span>
                </div>
              </div>

              {/* Simple enquiry form (static) */}
              <form className="mt-4 space-y-3">
                <input
                  type="text"
                  placeholder="Full Name*"
                  className="input-field text-sm"
                />
                <input
                  type="email"
                  placeholder="Email*"
                  className="input-field text-sm"
                />
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <input
                      type="text"
                      defaultValue="+91"
                      className="input-field text-sm"
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      placeholder="Your Phone*"
                      className="input-field text-sm"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="input-field text-sm"
                    placeholder="Travel Date*"
                  />
                  <input
                    type="number"
                    className="input-field text-sm"
                    placeholder="Traveller Count*"
                  />
                </div>
                <textarea
                  rows={3}
                  className="input-field text-sm resize-none"
                  placeholder="Message..."
                />
                <button
                  type="button"
                  className="w-full btn-primary py-3 text-base"
                >
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      
    </div>
    <Footer />
    </>
  );
};

export default ViewItineraryPage;