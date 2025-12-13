/* ------------------------------------------------------------
   Page       : UserAuthPage.jsx
   Purpose    : Sign in page for the website
   References : 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Sign in page. 
                                 It should have only one input and button.
                               : Now I want the login logic to apply to my project. 
                                 Login logic should be like: user clicks on login and he has not registered yet 
                                 then in register there he should be only adding his full name and a email 
                                 whether and there should be a dropdown asking if he is an agent or traveller. 
                                 Then once he registered he should be only entering his Full name/username/email 
                                 and click on a button to log in. Create authcontroller, auth middleware, 
                                 authRoute as well.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Render children if authenticated
  return children;
};

export default ProtectedRoute;