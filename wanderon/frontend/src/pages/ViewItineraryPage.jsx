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

import React from "react";
import {
  FiActivity,
  FiMapPin,
  FiHome,
  FiClock,
  FiAirplay,
  FiCoffee,
  FiSun,
  FiStar,
} from "react-icons/fi";
import Footer from "../components/layout/Footer";

const TripDaySummary = ({ dayLabel, stats, sections }) => {
  return (
    <section className="space-y-3">
      {/* Day header */}
      <div className="flex items-center justify-between text-sm text-gray-900">
        <p className="font-semibold">{dayLabel}</p>

        {/* Right-side compact stats */}
        <div className="flex items-center gap-4 text-xs text-gray-600">
          {typeof stats.activities === "number" && (
            <span className="inline-flex items-center space-x-1">
              <FiActivity size={12} />
              <span>{stats.activities}</span>
            </span>
          )}
          {typeof stats.hotels === "number" && (
            <span className="inline-flex items-center space-x-1">
              <FiHome size={12} />
              <span>{stats.hotels}</span>
            </span>
          )}
          {typeof stats.transfers === "number" && (
            <span className="inline-flex items-center space-x-1">
              <FiMapPin size={12} />
              <span>{stats.transfers}</span>
            </span>
          )}
          {typeof stats.flights === "number" && stats.flights > 0 && (
            <span className="inline-flex items-center space-x-1">
              <FiAirplay size={12} />
              <span>{stats.flights}</span>
            </span>
          )}
        </div>
      </div>

      {/* Body blocks */}
      <div className="space-y-3 text-sm text-gray-800">
        {sections.map((section, idx) => {
          const {
            type, // "transfer" | "hotel" | "activity" | "meal" | "note" | "flight"
            title,
            label,
            lines,
            meta,
            text,
          } = section;

          const iconMap = {
            transfer: FiMapPin,
            activity: FiActivity,
            hotel: FiHome,
            meal: FiCoffee,
            note: FiSun,
            flight: FiAirplay,
          };

          const Icon = iconMap[type] || FiActivity;

          // Note / leisure block
          if (type === "note") {
            return (
              <div
                key={idx}
                className="mt-1 rounded-lg border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-800 flex items-center space-x-2"
              >
                <Icon className="flex-shrink-0" />
                <span>{title}</span>
              </div>
            );
          }

          // Flight block with meta info
          if (type === "flight") {
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="px-4 py-2 bg-gray-50 flex items-center justify-between text-xs text-gray-500">
                  <span className="inline-flex items-center space-x-1 text-gray-700">
                    <Icon size={14} />
                    <span className="font-medium">{title}</span>
                  </span>
                  {meta?.duration && (
                    <span className="inline-flex items-center space-x-1">
                      <FiClock size={12} />
                      <span>{meta.duration}</span>
                    </span>
                  )}
                </div>
                {meta && (
                  <div className="px-4 py-3 grid grid-cols-2 text-xs text-gray-600">
                    <div>
                      <p className="uppercase tracking-wide text-[11px] text-gray-500">
                        Starts At
                      </p>
                      <p className="mt-0.5 font-medium text-gray-800">
                        {meta.start}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="uppercase tracking-wide text-[11px] text-gray-500">
                        Ends
                      </p>
                      <p className="mt-0.5 font-medium text-gray-800">
                        {meta.end}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          }

          // Default block (transfer, activity, hotel, meal)
          return (
            <div key={idx} className="flex items-start space-x-2">
              <Icon className="mt-0.5 text-gray-500 flex-shrink-0" />
              <div className="space-y-1">
                {(label || text) && (
                  <p>
                    {label && <span className="font-semibold">{label}</span>}
                    {text && (
                      <>
                        {" "}
                        <span>{text}</span>
                      </>
                    )}
                  </p>
                )}
                {Array.isArray(lines) && lines.length > 0 && (
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {lines.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

/**
 * Main Trip Summary page:
 * - Left: Trip summary card (70%)
 * - Right: Price / enquiry card (30%)
 */
const ViewItineraryPage = () => {
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