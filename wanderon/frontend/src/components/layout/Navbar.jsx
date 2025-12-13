/* ------------------------------------------------------------
   Component : Navbar.jsx
   Purpose   : Navigation bar for the website
   References: 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Navbar component.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/

   Tags : 
    @custom-edit-block         : Specifies that the code block has been manually modified as per project requirements.
        Start tag              : @custom-edit-block: == START ==
        End tag                : @custom-edit-block: == END ==       
--------------------------------------------------------------*/

import { FiSearch, FiMenu, FiLogOut, FiUser } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {

  const navigate = useNavigate();


  // @custom-edit-block: == START ==

  const { user, isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // @custom-edit-block: == END ==

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900">WanderOn</span>
          </Link>

          {/* ----------------------------------------------------------------
                                   Desktop Navigation Menu
            * ----------------------------------------------------------------*/}

          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center">
             {/* @custom-edit-block: == START == */}
            <Link to="/destinations" className="text-gray-700 hover:text-gray-900 font-medium">
              Destinations
            </Link>
            <Link to="/create" className="text-gray-700 hover:text-gray-900 font-medium">
              Create Trip
            </Link>
            <Link to="/my-trips" className="text-gray-700 hover:text-gray-900 font-medium">
              My Trips
            </Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-gray-900 font-medium">
              Contact Us
            </Link>
            {/* @custom-edit-block: == END == */}
          </div>

          {/* Search Bar : Can be implemented later */}
          {/* <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <form className="w-full relative">
              <input
                type="text"
                placeholder="Search destinations, trips..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500"
              />
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </form>
          </div> */}

          {/* ----------------------------------------------------------------
                                   Desktop Navigation Menu
            * ---------------------------------------------------------------- */
            }
          <div className="hidden md:flex items-center space-x-4">

            {/* @custom-edit-block: == START == */}
          {isAuthenticated ? (
              // Logged in state
              <div className="flex items-center space-x-4">
                {/* User Info */}
                <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                  <span className="text-2xl">{user?.avatar || '👤'}</span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-gray-900">
                      {user?.fullName}
                    </span>
                    <span className="text-xs text-gray-500 capitalize">
                      {user?.userType}
                    </span>
                  </div>
                </div>

                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <FiLogOut size={18} />
                  <span className="font-medium">Logout</span>
                </button>
              </div>
            ) : (
              // Logged out state
              <div className="flex items-center space-x-3">
                <button 
                  onClick={() => navigate("/login")} 
                  className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => navigate("/register")} 
                  className="btn-primary"
                >
                  Register
                </button>
              </div>
            )}  
            {/* @custom-edit-block: == END == */}
          </div>

          {/* Mobile Menu Button (non-functional, visual only) */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <FiMenu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;