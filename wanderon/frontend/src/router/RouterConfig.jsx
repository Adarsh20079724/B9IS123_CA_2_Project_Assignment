import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import CreateTripPage from "../pages/CreateTripPage";
import MyTripsPage from "../pages/MyTripsPage";
import Navbar from "../components/layout/Navbar";
import ContactPage from "../pages/ContactPage";
import DestinationsPage from "../pages/DestinationsPage";
import ViewItineraryPage from "../pages/ViewItineraryPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

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
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact-us" element={<ContactPage />} />

          {/* Login and Register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Private Routes : This requires authentication */}
          <Route 
            path="/create"
            element={
              <ProtectedRoute>
                <CreateTripPage />
              </ProtectedRoute> } 
            />

          <Route 
            path="/edit-trip/:id" 
            element={
              <ProtectedRoute>
                <CreateTripPage />
              </ProtectedRoute> } 
            />

          <Route 
            path="/my-trips" 
                element={
              <ProtectedRoute>
                <MyTripsPage />
              </ProtectedRoute> }
              / >

          <Route 
            path="/contact-us" 
            element={
              <ProtectedRoute>
                <ContactPage />
              </ProtectedRoute> } 
            />
         
          <Route 
            path="/itinerary" 
            element={
              <ProtectedRoute>
                <ViewItineraryPage />
              </ProtectedRoute> } 
          />
          
          <Route 
            path="/itinerary/:id" 
            element={
              <ProtectedRoute>
                <ViewItineraryPage />
              </ProtectedRoute> }  
            />

          {/* Catch-all: This will redirect unknown routes to home. By this site won't crash or go into 404 error */}
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </div>
    </Router>
  );
};

export default RouterConfig;