/* ------------------------------------------------------------
   Page       : UserAuthPage.jsx
   Purpose    : Sign in page for the website
   References : 
    1. ChatGPT Prompt          : Create global css as inspired from the provided image for the Sign in page. 
                                 It should have only one input and button.
    2. Style Inspiration Image : https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
    3. Tailwind CSS            : https://tailwindcss.com/docs/installation/using-vite
    4. React-icons             : https://react-icons.github.io/react-icons/
--------------------------------------------------------------*/

import { FiUser } from 'react-icons/fi';

const UserAuthPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4">
              <FiUser size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome! 👋
            </h2>
            <p className="text-gray-600">
              Enter your name to start planning amazing trips
            </p>
          </div>

          {/* Static Error Box (hidden in static version – remove or show as needed) */}
          {/* <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600">Please enter your name</p>
          </div> */}

          {/* Static Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="label">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="e.g., John Doe"
                className="input-field text-lg"
                disabled={false}
              />
            </div>

            <button
              type="button"
              className="w-full btn-primary text-lg py-3"
            >
              Start Planning
            </button>
          </form>

          {/* Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
              <span>-</span>
              <span> Sign in and create custom trips</span>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAuthPage;