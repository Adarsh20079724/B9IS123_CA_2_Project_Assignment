import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import UserAuthPage from "../pages/UserAuthPage";
import CreateTripPage from "../pages/CreateTripPage";
import MyTripsPage from "../pages/MyTripsPage";
import Navbar from "../components/layout/Navbar";
import ContactPage from "../pages/ContactPage";
import Destinations from "../pages/Destinations";

/**
 * RouterConfig
 * - All application routes is defined here.
 * - React-Router Official Docs : https://reactrouter.com/start/data/installation
 * - Youtube Video Link         : https://youtu.be/-oPldgKUwVA?si=rQj4aigyhvioS7wr
 */

const RouterConfig = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Global Navigation Bar */}
        <Navbar />

        {/* Route definitions */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<UserAuthPage />} />
          <Route path="/create" element={<CreateTripPage />} />
          <Route path="/create-trip/:id" element={<CreateTripPage />} />
          <Route path="/my-trips" element={<MyTripsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/destinations" element={<Destinations />} />

          {/* Catch-all: This will redirect unknown routes to home. By this site won't crash or go into 404 error */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </Router>
  );
};

export default RouterConfig;