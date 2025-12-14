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
    5. Stackoverflow.          : https://stackoverflow.com/questions/59864338/the-final-argument-passed-to-useeffect-changed-size-between-renders-except-i
-------------------------------------------------------------- */

import React, { useEffect } from "react";
import {
  FiActivity,
  FiMapPin,
  FiHome,
  FiAirplay,
  FiStar,
  FiCalendar,
} from "react-icons/fi";
import Footer from "../components/layout/Footer";
import TripDaySummary from "../components/itinerary/TripDaySummary";
import { useParams } from "react-router-dom";
import { useItinerary } from "../context/ItineraryContext";

/**
 * Main Trip Summary page:
 * - Left: Trip summary card (70%)
 * - Right: Price / enquiry card (30%)
 */
const ViewItineraryPage = () => {
  const { id } = useParams();

  // Use ItineraryContext instead of dummy data
  const {
    currentItinerary,
    loading,
    error,
    fetchItineraryById,
    clearCurrentItinerary,
  } = useItinerary();
  // @custom-edit-block: == END ==

  // @custom-edit-block: == START ==
  // Fetch itinerary when component mounts or ID changes
  useEffect(() => {
    if (!id) return;
    fetchItineraryById(id);

    // Cleanup: clear current itinerary when component unmounts
    return () => {
      clearCurrentItinerary();
    };
  }, [id]);
  // @custom-edit-block: == END ==

  // @custom-edit-block: == START ==
  // Helper function to format price
  const formatPrice = (price) => {
    if (!price) return "Contact for pricing";
    return `$${price.toLocaleString()}`;
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  // Calculate savings
  const calculateSavings = (expected, final) => {
    if (!expected || !final) return 0;
    return expected - final;
  };

  // Convert MongoDB day structure to component format
  const convertDaysToDisplayFormat = (days) => {
    if (!days || days.length === 0) return [];

    return days.map((day) => {
      const sections = [];

      // Add transfers
      if (day.transfers && day.transfers.length > 0) {
        if (day.transfers.length === 1) {
          sections.push({
            type: "transfer",
            label: "Transfer:",
            text: day.transfers[0].description || day.transfers[0].mode,
          });
        } else {
          sections.push({
            type: "transfer",
            label: `${day.transfers.length} Transfers:`,
            lines: day.transfers.map((t) => t.description || t.mode),
          });
        }
      }

      // Add flights
      if (day.flights && day.flights.length > 0) {
        day.flights.forEach((flight) => {
          sections.push({
            type: "flight",
            title: `Flight – ${flight.from} to ${flight.to}`,
            meta: {
              start: flight.departureTime || "N/A",
              end: flight.arrivalTime || "N/A",
              duration: flight.duration || "N/A",
            },
          });
        });
      }

      // Add hotels
      if (day.hotels && day.hotels.length > 0) {
        day.hotels.forEach((hotel) => {
          sections.push({
            type: "hotel",
            label: "Hotel:",
            text: `Check-in at ${hotel.name}${
              hotel.location ? " in " + hotel.location : ""
            }`,
          });
        });
      }

      // Add activities
      if (day.activities && day.activities.length > 0) {
        day.activities.forEach((activity) => {
          sections.push({
            type: "activity",
            label: "Activity:",
            text: `${activity.name}${
              activity.time ? " at " + activity.time : ""
            }${activity.description ? " – " + activity.description : ""}`,
          });
        });
      }

      // Add meals if any
      if (day.meals && day.meals.length > 0) {
        sections.push({
          type: "meal",
          lines: day.meals,
        });
      }

      // Add note if no activities
      if (
        sections.length === 0 ||
        (day.hotels && day.hotels.length > 0 && day.activities.length === 0)
      ) {
        sections.push({
          type: "note",
          title: "Enjoy your time at leisure",
        });
      }

      return {
        dayLabel: `Day ${day.dayNumber} – ${day.title}`,
        stats: {
          activities: day.activities?.length || 0,
          hotels: day.hotels?.length || 0,
          transfers: day.transfers?.length || 0,
          flights: day.flights?.length || 0,
        },
        sections,
      };
    });
  };
  // @custom-edit-block: == END ==

  // @custom-edit-block: == START ==
  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading itinerary...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg max-w-md">
          <h3 className="font-semibold mb-2">Error Loading Itinerary</h3>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  // Not found state
  if (!currentItinerary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Itinerary Not Found
          </h2>
          <p className="text-gray-600">
            The itinerary you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // Convert days to display format
  const displayDays = convertDaysToDisplayFormat(currentItinerary.days || []);
  // @custom-edit-block: == END ==

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
                    {`${currentItinerary.title}: Travel Summary`}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-700">
                    <span className="inline-flex items-center space-x-2">
                      <FiActivity className="text-gray-500" />
                      <span>
                        {currentItinerary.statistics?.totalActivities || 0}{" "}
                        Activities
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-2">
                      <FiMapPin className="text-gray-500" />
                      <span>
                        {currentItinerary.statistics?.totalTransfers || 0}{" "}
                        Transfers
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-2">
                      <FiAirplay className="text-gray-500" />
                      <span>
                        {currentItinerary.statistics?.totalFlights || 0} Flights
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-2">
                      <FiHome className="text-gray-500" />
                      <span>
                        {currentItinerary.statistics?.totalHotels || 0} Hotels
                      </span>
                    </span>
                    <span className="inline-flex items-center space-x-2">
                      <FiCalendar className="text-gray-500" />
                      <span>{currentItinerary.duration || 0} Days</span>
                    </span>
                  </div>
                  {/* Trip Dates */}
                  <div className="mt-3 text-sm text-gray-600">
                    <span>{formatDate(currentItinerary.startDate)}</span>
                    <span className="mx-2">→</span>
                    <span>{formatDate(currentItinerary.endDate)}</span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200" />

                {/* Days */}
                {displayDays.length > 0 ? (
                  <div className="space-y-4">
                    {displayDays.map((day, index) => (
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
                ) : (
                  <div className="text-center py-10 text-gray-500">
                    <p>No daily itinerary available yet.</p>
                  </div>
                )}
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
                        {formatPrice(currentItinerary.tripFinalCost || currentItinerary.negotiatedCost)}
                      </p>
                      <span className="text-sm text-gray-500">Per Adult</span>
                    </div>
                    {currentItinerary.expectedBudget && currentItinerary.tripFinalCost && 
                     currentItinerary.expectedBudget > currentItinerary.tripFinalCost && (
                      <p className="mt-1 text-sm text-gray-400 line-through">
                        {formatPrice(currentItinerary.expectedBudget)}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <div className="inline-flex items-center space-x-1 text-sm text-green-600">
                      <FiStar />
                      <span className="font-semibold">4.5</span>
                      <span className="text-gray-500 text-xs">(40)</span>
                    </div>
                    {currentItinerary.expectedBudget && currentItinerary.tripFinalCost && 
                     calculateSavings(currentItinerary.expectedBudget, currentItinerary.tripFinalCost) > 0 && (
                      <div className="inline-flex items-center space-x-2">
                        <span className="text-lg">💰</span>
                        <span className="px-3 py-1 rounded-full bg-green-600 text-white text-xs font-semibold tracking-wide">
                          SAVE {formatPrice(calculateSavings(currentItinerary.expectedBudget, currentItinerary.tripFinalCost))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t border-gray-200" />

                {/* Primary CTA */}
                <button className="w-full btn-primary py-3 text-base">
                  Send Enquiry
                </button>

                {/* @custom-edit-block: == START == */}
                {/* Optional: small summary of package */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <p className="text-sm font-semibold text-gray-900">
                    {currentItinerary.title}
                  </p>
                  <p className="text-xs text-gray-600">
                    {currentItinerary.destination}
                  </p>
                  {currentItinerary.summary && (
                    <p className="text-sm text-gray-600">
                      {currentItinerary.summary}
                    </p>
                  )}
                  <div className="flex items-center flex-wrap gap-2 text-sm">
                    <span className="font-bold text-gray-900">
                      {formatPrice(currentItinerary.tripFinalCost || currentItinerary.negotiatedCost)}
                    </span>
                    {currentItinerary.expectedBudget && currentItinerary.tripFinalCost && 
                     currentItinerary.expectedBudget > currentItinerary.tripFinalCost && (
                      <>
                        <span className="text-gray-400 line-through text-xs">
                          {formatPrice(currentItinerary.expectedBudget)}
                        </span>
                        <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold uppercase tracking-wide">
                          Save {formatPrice(calculateSavings(currentItinerary.expectedBudget, currentItinerary.tripFinalCost))}
                        </span>
                      </>
                    )}
                  </div>
                </div>
                {/* @custom-edit-block: == END == */}

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
