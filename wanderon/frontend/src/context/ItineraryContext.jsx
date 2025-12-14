/* ------------------------------------------------------------
   Context        : ItineraryContext
   Purpose        : Global state management for itineraries
                    (list, single itinerary, loading, errors)
                  
   Usage          :
     - Wrap App with <ItineraryProvider />
     - Access state using useItinerary()

   Future Scope   :
     - API integration
     - Auth-based itinerary ownership
     - Caching & optimistic updates

   References :
   Official Docs  : https://react.dev/reference/react/createContext
   ChatGPT :
        Prompt      : Create itinerary context skeleton
        Model file  : ItineraryContext.jsx
        ChatLink    : Will be updated
-------------------------------------------------------------- */


import { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/api';
import { useAuth } from './AuthContext';

const ItineraryContext = createContext(null);

export const ItineraryProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  
  // State management
  const [itineraries, setItineraries] = useState([]);
  const [currentItinerary, setCurrentItinerary] = useState(null);
  const [userItineraries, setUserItineraries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all itineraries
  const fetchAllItineraries = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get('/itineraries');
      if (response.data.success) {
        setItineraries(response.data.data);
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch itineraries';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fetch itinerary by ID
  const fetchItineraryById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/itineraries/${id}`);
      if (response.data.success) {
        setCurrentItinerary(response.data.data);
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch itinerary';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Fetch user's itineraries
  const fetchUserItineraries = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/itineraries/user/${userId}`);
      if (response.data.success) {
        setUserItineraries(response.data.data);
        return { success: true, data: response.data.data };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to fetch user itineraries';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch user itineraries when user logs in
  useEffect(() => {
    if (isAuthenticated && user?._id) {
      fetchUserItineraries(user._id);
    } else {
      setUserItineraries([]);
    }
  }, [isAuthenticated, user?._id]);

  // Create new itinerary
  const createItinerary = async (itineraryData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post('/itineraries', itineraryData);
      if (response.data.success) {
        const newItinerary = response.data.data;
        
        // Update state
        setItineraries(prev => [newItinerary, ...prev]);
        setUserItineraries(prev => [newItinerary, ...prev]);
        setCurrentItinerary(newItinerary);
        
        return { success: true, data: newItinerary };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to create itinerary';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Update itinerary
  const updateItinerary = async (id, updates) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.put(`/itineraries/${id}`, updates);
      if (response.data.success) {
        const updatedItinerary = response.data.data;
        
        // Update state
        setItineraries(prev => 
          prev.map(itin => itin._id === id ? updatedItinerary : itin)
        );
        setUserItineraries(prev => 
          prev.map(itin => itin._id === id ? updatedItinerary : itin)
        );
        
        if (currentItinerary?._id === id) {
          setCurrentItinerary(updatedItinerary);
        }
        
        return { success: true, data: updatedItinerary };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to update itinerary';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Delete itinerary
  const deleteItinerary = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(`/itineraries/${id}`);
      if (response.data.success) {
        // Update state
        setItineraries(prev => prev.filter(itin => itin._id !== id));
        setUserItineraries(prev => prev.filter(itin => itin._id !== id));
        
        if (currentItinerary?._id === id) {
          setCurrentItinerary(null);
        }
        
        return { success: true };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to delete itinerary';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Add day to itinerary
  const addDay = async (itineraryId, dayData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.post(`/itineraries/${itineraryId}/days`, dayData);
      if (response.data.success) {
        const updatedItinerary = response.data.data;
        
        // Update state
        setItineraries(prev => 
          prev.map(itin => itin._id === itineraryId ? updatedItinerary : itin)
        );
        setUserItineraries(prev => 
          prev.map(itin => itin._id === itineraryId ? updatedItinerary : itin)
        );
        
        if (currentItinerary?._id === itineraryId) {
          setCurrentItinerary(updatedItinerary);
        }
        
        return { success: true, data: updatedItinerary };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to add day';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Update day
  const updateDay = async (itineraryId, dayId, updates) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.put(`/itineraries/${itineraryId}/days/${dayId}`, updates);
      if (response.data.success) {
        const updatedItinerary = response.data.data;
        
        // Update state
        setItineraries(prev => 
          prev.map(itin => itin._id === itineraryId ? updatedItinerary : itin)
        );
        setUserItineraries(prev => 
          prev.map(itin => itin._id === itineraryId ? updatedItinerary : itin)
        );
        
        if (currentItinerary?._id === itineraryId) {
          setCurrentItinerary(updatedItinerary);
        }
        
        return { success: true, data: updatedItinerary };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to update day';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Delete day
  const deleteDay = async (itineraryId, dayId) => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.delete(`/itineraries/${itineraryId}/days/${dayId}`);
      if (response.data.success) {
        const updatedItinerary = response.data.data;
        
        // Update state
        setItineraries(prev => 
          prev.map(itin => itin._id === itineraryId ? updatedItinerary : itin)
        );
        setUserItineraries(prev => 
          prev.map(itin => itin._id === itineraryId ? updatedItinerary : itin)
        );
        
        if (currentItinerary?._id === itineraryId) {
          setCurrentItinerary(updatedItinerary);
        }
        
        return { success: true, data: updatedItinerary };
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to delete day';
      setError(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  // Clear current itinerary
  const clearCurrentItinerary = () => {
    setCurrentItinerary(null);
  };

  // Clear error
  const clearError = () => {
    setError(null);
  };

  const value = {
    // State
    itineraries,
    currentItinerary,
    userItineraries,
    loading,
    error,
    
    // Fetch functions
    fetchAllItineraries,
    fetchItineraryById,
    fetchUserItineraries,
    
    // CRUD functions
    createItinerary,
    updateItinerary,
    deleteItinerary,
    
    // Day management
    addDay,
    updateDay,
    deleteDay,
    
    // Utility functions
    clearCurrentItinerary,
    clearError
  };

  return (
    <ItineraryContext.Provider value={value}>
      {children}
    </ItineraryContext.Provider>
  );
};

// Custom hook to use itinerary context
export const useItinerary = () => {
  const context = useContext(ItineraryContext);
  if (!context) {
    throw new Error('useItinerary must be used within an ItineraryProvider');
  }
  return context;
};

export default ItineraryContext;