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


import { FiSearch } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import ItineraryCard from "../components/sharedComponents/ItineraryCard";
import { useItinerary } from "../context/itineraryContext";
import { useEffect, useState } from "react";

const DestinationsPage = () => {

  // @custom-edit-block: == START ==
  // Use ItineraryContext instead of dummy data
  const { itineraries, loading, error, fetchAllItineraries } = useItinerary();
  // @custom-edit-block: == END ==

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTrips, setFilteredTrips] = useState([]);

  // @custom-edit-block: == START ==
  // Fetch all itineraries on component mount
  useEffect(() => {
    fetchAllItineraries();
  }, []);
  // @custom-edit-block: == END ==

  // @custom-edit-block: == START ==
  // Filter itineraries based on search query and public status
  useEffect(() => {
    if (itineraries) {
      const filtered = itineraries.filter(trip => {
        // Only show published and public itineraries
        const isPublic = trip.isPublic && trip.status === 'published';
        
        // Search filter
        const matchesSearch = searchQuery === "" || 
          trip.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trip.destination?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          trip.summary?.toLowerCase().includes(searchQuery.toLowerCase());
        
        return isPublic && matchesSearch;
      });
      
      setFilteredTrips(filtered);
    }
  }, [itineraries, searchQuery]);
  // @custom-edit-block: == END ==  


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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}          

          {/* Trips Grid */}
        {!loading && !error && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Available Trips ({filteredTrips.length})
              </h2>

              {filteredTrips.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg">No trips found.</p>
                  <p className="text-gray-400 mt-2">Try adjusting your search or filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTrips.map((trip) => (
                    <ItineraryCard key={trip._id} trip={trip} />
                  ))}
                </div>
              )}
            </section>
          )}          
        </div>
      </main>

      {/* Footer (already in your project) */}
      <Footer />
    </div>
  );
};

export default DestinationsPage;