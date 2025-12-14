/* ------------------------------------------------------------
   Form      : Authcontext.jsx
   Purpose   : Context for Login and register functionality
   References: 
    1. ChatGPT Prompt          : 
                                : Check the bracket error after transportation code block and fix it.
                                : what is e.stopPropogation function. Add it in the delete and 
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
-------------------------------------------------------------- */

import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);    
    }
    
    setLoading(false);
  }, []);

  // Register function
  const register = async (fullName, email, userType) => {
    try {
      const response = await api.post('/auth/register', {
        fullName,
        email,
        userType
      });

      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store in state
        setToken(token);
        setUser(user);
        setIsAuthenticated(true);
        
        // Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));

        return { success: true, user };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed'
      };
    }
  };

  // Login function
  const login = async (identifier) => {
    try {
      const response = await api.post('/auth/login', {
        identifier
      });

      if (response.data.success) {
        const { token, user } = response.data;
        
        // Store in state
        setToken(token);
        setUser(user);
        setIsAuthenticated(true);
        
        // Store in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
            
        return { success: true, user };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed'
      };
    }
  };

  // Logout function
  const logout = () => {
    // Clear state
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    
    // Clear localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    register,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;