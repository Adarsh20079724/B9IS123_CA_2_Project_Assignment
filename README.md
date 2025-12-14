# WanderOn - Travel Itinerary Management System

**Course**: Programming with Information Systems  
**Project**: WanderOn - CRUD Implementation  
**Author**: [Your Name]  
**Institution**: [Your Institution]  
**Date**: December 2024

---

## 📑 Table of Contents

1. [Project Overview](#-project-overview)
2. [Project Structure](#-project-structure)
   - [Frontend Structure](#frontend-structure)
   - [Backend Structure](#backend-structure)
3. [Prerequisites](#-prerequisites)
4. [Tech Stack](#-tech-stack)
5. [Installation & Setup](#-installation--setup)
6. [User Journey Flow](#-user-journey-flow)
7. [API Routes](#-api-routes)
8. [Features](#-features)
9. [@custom-edit-block](#custom-edit-block)
10. [References](#-references)

---

## 🌍 Project Overview

**WanderOn** is a comprehensive travel itinerary management system that allows users to create, manage, and share detailed travel plans. The application provides a seamless experience for both travelers and travel agents to collaborate on trip planning.

### Key Highlights:
- **Role-Based Access**: Support for travelers and travel agents
- **Complete CRUD Operations**: Create, Read, Update, and Delete itineraries
- **Day-by-Day Planning**: Detailed itinerary builder with activities, transfers, and accommodations
- **Real-Time Preview**: Live preview of itineraries as you build them
- **Public Discovery**: Browse and discover published travel itineraries
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS

### Purpose:
This project demonstrates full-stack web development capabilities including:
- RESTful API design and implementation
- State management with React Context API
- MongoDB database operations
- JWT-based authentication
- Modern frontend development practices

---

## 📂 Project Structure

### Frontend Structure

```
frontend/
├── public/                         # Static assets
├── src/
│   ├── components/
│   │   ├── forms/
│   │   │   └── DayAccordionForm.jsx           # Accordion form for day-by-day itinerary building
│   │   ├── itinerary/
│   │   │   ├── LiveItineraryPreview.jsx       # Real-time preview component for itineraries
│   │   │   └── TripDaySummary.jsx             # Component to display individual day summaries
│   │   ├── layout/
│   │   │   ├── Footer.jsx                     # Global footer component
│   │   │   └── Navbar.jsx                     # Navigation bar with auth state management
│   │   └── sharedComponents/
│   │       ├── ItineraryCard.jsx              # Reusable card for displaying itineraries on destinations page
│   │       └── MyTripCard.jsx                 # Card component for user's personal trips with edit/delete actions
│   ├── context/
│   │   ├── AuthContext.jsx                    # Authentication state management (login, register, logout)
│   │   └── ItineraryContext.jsx               # Itinerary state management with CRUD operations
│   ├── pages/
│   │   ├── ContactPage.jsx                    # Contact information and enquiry page
│   │   ├── CreateTripPage.jsx                 # Main page for creating/editing itineraries with split-screen layout
│   │   ├── DestinationsPage.jsx               # Browse all published itineraries with search and filters
│   │   ├── LandingPage.jsx                    # Home page with hero section and features
│   │   ├── Login.jsx                          # User login page with email/name authentication
│   │   ├── MyTripsPage.jsx                    # User's personal trips dashboard with filters (all/draft/published)
│   │   ├── Register.jsx                       # New user registration page with role selection
│   │   └── ViewItineraryPage.jsx              # Detailed view of a single itinerary with pricing and enquiry form
│   ├── router/
│   │   └── RouterConfig.jsx                   # Application routing with protected routes
│   ├── utils/
│   │   └── api.js                             # Axios instance with request/response interceptors
│   ├── App.jsx                                # Main app component with context providers
│   ├── index.css                              # Global styles and Tailwind imports
│   └── main.jsx                               # React entry point
├── .env                                       # Environment variables (VITE_API_URL)
├── package.json                               # Frontend dependencies and scripts
├── tailwind.config.js                         # Tailwind CSS configuration
└── vite.config.js                             # Vite build configuration
```

### Backend Structure

```
backend/
├── config/
│   └── databaseConfig.js                      # MongoDB connection setup with error handling
├── controllers/
│   ├── authController.js                      # Authentication logic (register, login, getUserById, getCurrentUser)
│   ├── itineraryController.js                 # Itinerary CRUD operations (9 endpoints)
│   └── messageController.js                   # Message handling for contact form
├── middleware/
│   ├── auth.js                                # JWT authentication middleware for protected routes
│   ├── cors.js                                # CORS configuration for cross-origin requests
│   └── logger.js                              # Request logging middleware
├── models/
│   ├── Destination.js                         # Destination schema (country, city, description, thumbnail)
│   ├── Itinerary.js                           # Main itinerary schema with embedded days, activities, transfers, hotels
│   ├── Message.js                             # Contact message schema
│   ├── User.js                                # User schema with role-based access (traveller/agent)
│   └── index.js                               # Model exports
├── routes/
│   ├── authRoutes.js                          # Authentication routes (/register, /login, /user/:id, /me)
│   ├── itineraryRoutes.js                     # Itinerary routes (GET, POST, PUT, DELETE with day management)
│   ├── messageRoutes.js                       # Message routes for contact form
│   └── index.js                               # Main router combining all routes
├── seedDB/
│   ├── initialData.js                         # Seed data (10 users, 8 destinations, 10 itineraries)
│   ├── seedSampleItinerary.js                 # Database seeding script
│   └── seedSampleUsers.js                     # User-only seeding script
├── utils/
│   └── jwtUtils.js                            # JWT token generation and verification utilities
├── .env                                       # Environment variables (PORT, MONGODB_URI, JWT_SECRET)
├── package.json                               # Backend dependencies and scripts
└── server.js                                  # Express server entry point with middleware setup
```

---

## 🔧 Prerequisites

Before running this project, ensure you have:

- **Node.js** (v16.x or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v5.x or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Package manager (comes with Node.js)
- **Git** - Version control - [Download](https://git-scm.com/)

### Optional:
- **MongoDB Compass** - GUI for MongoDB - [Download](https://www.mongodb.com/products/compass)
- **Postman** - API testing - [Download](https://www.postman.com/)

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.x |
| **Vite** | Build Tool & Dev Server | 5.x |
| **React Router** | Client-side Routing | 6.x |
| **Tailwind CSS** | Styling Framework | 3.x |
| **Axios** | HTTP Client | 1.x |
| **React Icons** | Icon Library | 5.x |

### Backend
| Technology | Purpose | Version |
|------------|---------|---------|
| **Node.js** | Runtime Environment | 16.x+ |
| **Express** | Web Framework | 4.x |
| **MongoDB** | Database | 5.x |
| **Mongoose** | ODM for MongoDB | 8.x |
| **jsonwebtoken** | JWT Authentication | 9.x |
| **cors** | Cross-Origin Resource Sharing | 2.x |
| **dotenv** | Environment Variables | 16.x |

### Development Tools
- **ESLint** - Code linting
- **Git** - Version control
- **VS Code** - Code editor (recommended)

---

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd travel-itinerary-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
cat > .env << EOL
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/travel-itinerary
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRES_IN=30d
CLIENT_URL=http://localhost:5173
EOL

# Start MongoDB (if not running)
# On macOS/Linux:
sudo systemctl start mongod
# On Windows: MongoDB runs as a service

# Seed the database (optional but recommended)
node seedDB/seedSampleItinerary.js

# Start the backend server
npm start
```

Backend will run on: `http://localhost:3000`

### 3. Frontend Setup

```bash
# Open new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
cat > .env << EOL
VITE_API_URL=http://localhost:3000/api
EOL

# Start the development server
npm run dev
```

Frontend will run on: `http://localhost:5173`

### 4. Verify Installation

1. **Backend Health Check**: Visit `http://localhost:3000/api/health`
   - Should return: `{"status": "ok", "message": "Server is running"}`

2. **Database Connection**: Check terminal for:
   - `✅ MongoDB connected successfully`

3. **Frontend**: Open `http://localhost:5173`
   - You should see the WanderOn landing page

---

## 👤 User Journey Flow

### 1️⃣ **New User Registration Flow**

```
User visits WanderOn
    ↓
Clicks "Register" in Navbar
    ↓
Fills Registration Form:
  - Full Name: "John Doe"
  - Email: "john@example.com"
  - User Type: "Traveller" or "Agent"
    ↓
Clicks "Register" button
    ↓
Backend creates user in MongoDB
    ↓
Backend generates JWT token (30-day expiry)
    ↓
Frontend receives token + user data
    ↓
Stores in localStorage: 
  - token: "eyJhbGciOiJIUzI1NiIsInR..."
  - user: {"_id": "...", "fullName": "John Doe", ...}
    ↓
Navbar updates to show: [👤 John Doe - Traveller] [Logout]
    ↓
Redirected to Landing Page
    ↓
✅ User is now authenticated!
```

### 2️⃣ **Existing User Login Flow**

```
User visits WanderOn
    ↓
Clicks "Sign In" in Navbar
    ↓
Enters identifier (email OR full name)
  - Example: "john@example.com" or "John Doe"
    ↓
Clicks "Login" button
    ↓
Backend searches MongoDB for user
    ↓
User found → Backend generates JWT token
    ↓
Frontend receives token + user data
    ↓
Stores in localStorage
    ↓
Navbar updates with user info
    ↓
Redirected to Landing Page
    ↓
✅ User is logged in!
```

### 3️⃣ **Browse Destinations Flow**

```
User clicks "Destinations" in Navbar
    ↓
ItineraryContext fetches all itineraries
    ↓
Filters: isPublic = true, status = "published"
    ↓
Displays as ItineraryCards:
  - Title: "Iceland Northern Lights Quest"
  - Destination: "Reykjavik, Iceland"
  - Duration: 8 Days
  - Price: $3,500
  - Rating: 4.5 ⭐
    ↓
User types "Paris" in search bar
    ↓
Real-time filtering → Shows only Paris trips
    ↓
User clicks "View Details" on a card
    ↓
Navigate to /itinerary/:id
    ↓
Shows complete itinerary:
  - Day-by-day breakdown
  - Activities, transfers, hotels
  - Pricing details
  - Enquiry form
```

### 4️⃣ **Create New Trip Flow** (Protected - Login Required)

```
User clicks "Create Trip" in Navbar
    ↓
Protected Route checks authentication:
  - If not logged in → Redirect to Login
  - If logged in → Allow access
    ↓
Navigate to /create
    ↓
Split-screen layout loads:
  - Left (40%): Form
  - Right (60%): Live Preview
    ↓
User fills Basic Information:
  - Title: "Amazing Paris Weekend"
  - Destination: "Paris, France"
  - Start Date: 2024-07-01
  - End Date: 2024-07-03
  - Expected Budget: $2000
  - Summary: "A wonderful weekend in Paris"
    ↓
User clicks "Add Day"
    ↓
Day 1 accordion appears
    ↓
User expands Day 1 and fills:
  - Title: "Arrival in Paris"
  - Date: 2024-07-01
  - Add Transfer:
    * Mode: Flight
    * From: London
    * To: Paris
    * Description: Morning flight
  - Add Hotel:
    * Name: Paris Grand Hotel
    * Category: 4 Star
    * Location: City Center
  - Add Activity:
    * Name: Eiffel Tower Visit
    * Time: 14:00
    * Category: Sightseeing
    * Description: Visit the iconic tower
    ↓
User adds Day 2 and Day 3 similarly
    ↓
Live Preview updates in real-time on right side
    ↓
User clicks "Save Draft"
    ↓
Validation runs:
  ✓ Title filled
  ✓ Destination filled
  ✓ Dates filled
  ✓ End date > Start date
    ↓
Auto-calculation:
  - Duration: 3 days (calculated from dates)
  - Statistics:
    * totalActivities: 8
    * totalTransfers: 5
    * totalHotels: 3
    ↓
CreateItinerary API call:
  POST /api/itineraries
  Body: {
    userId: "507f191e810c19729de860ea",
    title: "Amazing Paris Weekend",
    destination: "Paris, France",
    startDate: "2024-07-01",
    endDate: "2024-07-03",
    duration: 3,
    expectedBudget: 2000,
    summary: "A wonderful weekend in Paris",
    status: "draft",
    isPublic: false,
    statistics: {...},
    days: [...]
  }
    ↓
Backend saves to MongoDB
    ↓
Frontend receives success response
    ↓
Alert: "Itinerary created successfully! (Status: draft)"
    ↓
Navigate to /my-trips
    ↓
✅ New trip appears in list with "Draft" badge!
```

### 5️⃣ **My Trips Flow** (Protected)

```
User clicks "My Trips" in Navbar
    ↓
Protected Route checks authentication
    ↓
Navigate to /my-trips
    ↓
ItineraryContext already has userItineraries
  (Auto-fetched when user logged in)
    ↓
Display trips in grid:
  - All Trips (5)
  - Drafts (2)
  - Published (3)
    ↓
User clicks "Drafts" filter
    ↓
Shows only status = "draft" trips
    ↓
User sees "Amazing Paris Weekend" (Draft)
    ↓
Three actions available:
  1. [View] → /itinerary/:id
  2. [Edit] → /edit-trip/:id
  3. [Delete] → Two-click confirmation
    ↓
User clicks [Delete] (1st time)
    ↓
Button turns red → "Click again to confirm"
    ↓
User clicks [Delete] (2nd time within 3 seconds)
    ↓
DELETE /api/itineraries/:id
    ↓
Backend deletes from MongoDB
    ↓
ItineraryContext updates userItineraries state
    ↓
Card disappears from grid automatically
    ↓
✅ Trip deleted!
```

### 6️⃣ **Edit Trip Flow** (Protected)

```
User in My Trips page
    ↓
Clicks [Edit] on "Amazing Paris Weekend"
    ↓
Navigate to /edit-trip/507f1f77bcf86cd799439011
    ↓
CreateTripPage detects :id parameter
    ↓
Calls fetchItineraryById(id)
    ↓
Backend returns itinerary data
    ↓
Form auto-populates with all existing data:
  - Title: "Amazing Paris Weekend"
  - All days with activities, transfers, hotels
    ↓
User modifies:
  - Change title to "Perfect Paris Weekend"
  - Add Day 4
  - Add more activities
    ↓
User clicks "Publish" (instead of "Save Draft")
    ↓
Validation runs
    ↓
Auto-calculation updates statistics
    ↓
UpdateItinerary API call:
  PUT /api/itineraries/507f1f77bcf86cd799439011
  Body: {
    title: "Perfect Paris Weekend",
    status: "published",
    isPublic: true,
    duration: 4,
    statistics: {...},
    days: [...]
  }
    ↓
Backend updates MongoDB
    ↓
Alert: "Itinerary updated successfully! (Status: published)"
    ↓
Navigate to /my-trips
    ↓
✅ Trip now shows "Published" badge and appears in Destinations!
```

### 7️⃣ **View Published Trip Flow**

```
Anyone visits /destinations (no login required)
    ↓
Sees "Perfect Paris Weekend" in grid
    ↓
Clicks "View Details"
    ↓
Navigate to /itinerary/507f1f77bcf86cd799439011
    ↓
ViewItineraryPage loads
    ↓
Displays:
  Left side (70%):
    - Title: "Perfect Paris Weekend"
    - Destination: Paris, France
    - Dates: Jul 1 - Jul 4, 2024
    - Statistics: 12 activities, 8 transfers, 4 hotels
    - Day-by-day breakdown:
      * Day 1: Arrival in Paris
        - Transfer: Flight from London to Paris
        - Hotel: Paris Grand Hotel
        - Activity: Eiffel Tower Visit (14:00)
      * Day 2: Explore Paris
        - Activities: Louvre Museum, Seine River Cruise
      * [... all days ...]
  Right side (30%):
    - Pricing:
      * Final Price: $2,000
      * Original: $2,500 (crossed out)
      * Save: $500 badge
    - Enquiry Form:
      * Full Name
      * Email
      * Phone
      * Travel Date
      * Traveller Count
      * Message
      * [Send Enquiry] button
    ↓
Visitor can enquire about the trip
    ↓
✅ Complete trip information displayed!
```

### 8️⃣ **Logout Flow**

```
User clicks [Logout] in Navbar
    ↓
AuthContext.logout() executes:
  - Clears state: user = null, token = null
  - Clears localStorage: removes 'token' and 'user'
  - Removes axios default header: Authorization
    ↓
Navbar updates → Shows "Sign In" and "Register"
    ↓
User still on current page
    ↓
If user tries to access protected route:
  → Redirected to /login automatically
    ↓
✅ User logged out successfully!
```

---

## 🔌 API Routes

### Authentication Routes

| Method | Endpoint | Description | Auth Required | Request Body | Response |
|--------|----------|-------------|---------------|--------------|----------|
| **POST** | `/api/auth/register` | Register new user | ❌ | `{fullName, email, userType}` | `{success, message, token, user}` |
| **POST** | `/api/auth/login` | Login user | ❌ | `{identifier}` (email or name) | `{success, message, token, user}` |
| **GET** | `/api/auth/user/:id` | Get user by ID | ❌ | - | `{success, data}` |
| **GET** | `/api/auth/me` | Get current user | ✅ | - | `{success, data}` |

### Itinerary Routes

| Method | Endpoint | Description | Auth Required | Request Body | Response |
|--------|----------|-------------|---------------|--------------|----------|
| **GET** | `/api/itineraries` | Get all itineraries | ❌ | - | `{success, count, data}` |
| **GET** | `/api/itineraries/:id` | Get itinerary by ID | ❌ | - | `{success, data}` |
| **GET** | `/api/itineraries/user/:userId` | Get user's itineraries | ❌ | - | `{success, count, data}` |
| **POST** | `/api/itineraries` | Create new itinerary | ✅ | `{userId, title, destination, ...}` | `{success, message, data}` |
| **PUT** | `/api/itineraries/:id` | Update itinerary | ✅ | `{title, destination, status, ...}` | `{success, message, data}` |
| **DELETE** | `/api/itineraries/:id` | Delete itinerary | ✅ | - | `{success, message}` |
| **POST** | `/api/itineraries/:id/days` | Add day to itinerary | ✅ | `{dayNumber, title, date, ...}` | `{success, message, data}` |
| **PUT** | `/api/itineraries/:id/days/:dayId` | Update specific day | ✅ | `{title, activities, ...}` | `{success, message, data}` |
| **DELETE** | `/api/itineraries/:id/days/:dayId` | Delete specific day | ✅ | - | `{success, message, data}` |

### Example API Calls

#### Register User
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "userType": "traveller"
  }'
```

#### Create Itinerary
```bash
curl -X POST http://localhost:3000/api/itineraries \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "userId": "507f191e810c19729de860ea",
    "title": "Paris Adventure",
    "destination": "Paris, France",
    "startDate": "2024-07-01",
    "endDate": "2024-07-05",
    "duration": 5,
    "expectedBudget": 3000,
    "status": "draft",
    "days": []
  }'
```

#### Get All Published Itineraries
```bash
curl http://localhost:3000/api/itineraries
```

---

## ✨ Features

### 🔐 Authentication & Authorization
- **Simple Authentication**: Login with email or full name (no password required for demo)
- **JWT Tokens**: Secure, stateless authentication with 30-day expiration
- **Role-Based Access**: Separate roles for travelers and agents
- **Protected Routes**: Automatic redirect to login for unauthorized access
- **Persistent Sessions**: Token stored in localStorage for session persistence

###  Itinerary Management
- **Create**: Build detailed itineraries with day-by-day planning
- **Read**: View all published itineraries or specific trip details
- **Update**: Edit existing itineraries with auto-population
- **Delete**: Safe two-click delete with confirmation

### Day-by-Day Planning
- **Multiple Transfers**: Add multiple flights, trains, taxis per day
- **Multiple Hotels**: Book multiple accommodations per day
- **Activities**: Unlimited activities with time, category, and description
- **Live Preview**: Real-time preview of itinerary as you build
- **Duplicate Days**: Copy entire day structure for similar days
- **Reorder**: Automatic day renumbering when adding/removing

### 🔍 Discovery & Search
- **Browse Destinations**: View all published travel itineraries
- **Real-Time Search**: Filter trips by title, destination, or summary
- **Filters**: Filter by status (all/draft/published)
- **Detailed View**: Complete trip breakdown with pricing and enquiry form

### 📊 Dashboard
- **My Trips**: Personal dashboard showing all user trips
- **Status Filters**: View all, drafts, or published trips
- **Quick Actions**: View, edit, or delete trips with one click
- **Statistics**: Auto-calculated trip statistics (activities, transfers, hotels)

### 💻 User Experience
- **Responsive Design**: Mobile-friendly interface
- **Loading States**: Professional loading indicators
- **Error Handling**: Clear, user-friendly error messages
- **Empty States**: Helpful messages when no data available
- **Auto-Save**: Draft mode for work-in-progress trips
- **Validation**: Form validation before submission

---

## @custom-edit-block

### Code Blocks Documentation

Throughout the codebase, you'll find special comment blocks marking custom edits:

```javascript
// @custom-edit-block: == START ==
// Your custom code here
// @custom-edit-block: == END ==
```

**Purpose**: These blocks identify code sections that have been manually modified as per project requirements.

### Key Custom Edit Areas:

#### **Frontend Components**

1. **`AuthContext.jsx`**
   - Custom API integration using project's `api.js` instead of direct axios
   - JWT token management with localStorage
   - Auto-header injection for authenticated requests

2. **`ItineraryContext.jsx`**
   - Auto-fetch user itineraries on login
   - Real-time state updates after CRUD operations
   - Smart caching to avoid duplicate API calls

3. **`Navbar.jsx`**
   - Dynamic user display based on authentication state
   - Conditional rendering of login/logout buttons
   - User role display (Traveller/Agent)

4. **`DestinationsPage.jsx`**
   - Public/published filter logic
   - Real-time search implementation
   - ItineraryContext integration replacing dummy data

5. **`MyTripsPage.jsx`**
   - Auto-loaded user trips (no manual fetch)
   - Two-click delete confirmation with timeout
   - Dynamic filter counts

6. **`CreateTripPage.jsx`**
   - Dual-mode support (create/edit)
   - Auto-calculation of duration and statistics
   - Form validation before save
   - Auto-population for edit mode

7. **`DayAccordionForm.jsx`**
   - Array-based structure for MongoDB (transfers[], hotels[])
   - Dynamic add/remove for multiple items
   - Updated activity categories matching backend enum

#### **Backend Controllers**

1. **`authController.js`**
   - Simple authentication without password
   - JWT token generation on register/login
   - Case-insensitive email/name search

2. **`itineraryController.js`**
   - Comprehensive CRUD with day management
   - Population of user data in responses
   - Subdocument operations for days

### Enum Synchronization

**Activity Categories** (Frontend ↔ Backend):
```javascript
// Frontend: DayAccordionForm.jsx
['Sightseeing', 'Adventure', 'Food', 'Shopping', 'Relaxation', 'Other']

// Backend: Itinerary.js model
['Sightseeing', 'Adventure', 'Food', 'Shopping', 'Relaxation', 'Other']
```

**User Types**:
```javascript
['traveller', 'agent']
```

**Itinerary Status**:
```javascript
['draft', 'published', 'archived']
```

### Data Structure Alignment

**Old Structure** (Initial Design):
```javascript
day: {
  transfer: {...},      // Single object
  accommodation: {...}  // Single object
}
```

**New Structure** (MongoDB Implementation):
```javascript
day: {
  transfers: [],  // Array of objects
  hotels: [],     // Array of objects
  activities: [], // Array of objects
  flights: [],    // Array of objects
  meals: []       // Array of strings
}
```

---

## References

### Documentation
1. **React Documentation** - https://react.dev/
   - Used for: Component architecture, hooks (useState, useEffect, useContext)
   
2. **React Router Documentation** - https://reactrouter.com/
   - Used for: Client-side routing, protected routes, navigation

3. **Tailwind CSS Documentation** - https://tailwindcss.com/docs
   - Used for: Styling, responsive design, utility classes

4. **MongoDB Documentation** - https://www.mongodb.com/docs/
   - Used for: Database design, schema structure, queries

5. **Mongoose Documentation** - https://mongoosejs.com/docs/
   - Used for: Schema definition, validation, middleware

6. **Express.js Documentation** - https://expressjs.com/
   - Used for: Server setup, routing, middleware

7. **JWT Documentation** - https://jwt.io/introduction
   - Used for: Token-based authentication, security

### Style Inspiration
- **Design Reference**: Pinterest Board - https://i.pinimg.com/736x/cd/47/8a/cd478a4ec7c991711521c8806ca5ab16.jpg
- **Travel Websites**:
  - Thrillophilia - https://www.thrillophilia.com/
  - WanderOn - https://wanderon.in/

### Icon Library
- **React Icons** - https://react-icons.github.io/react-icons/
  - Used: Feather Icons (Fi) for UI elements

### AI Assistance
- **ChatGPT (OpenAI)**
  - Used for:
    - CSS styling matching reference images
    - Component structure and layout design
    - Debugging React state management
    - MongoDB schema design guidance
    - Error handling patterns
    - Tailwind CSS class recommendations

### Stack Overflow
- **e.stopPropagation()** - https://stackoverflow.com/questions/59864338/
  - Used in DayAccordionForm for preventing accordion toggle on button clicks

### Course Materials
- **Programming with Information Systems**
  - Lectures on REST API design
  - CRUD operations best practices
  - MongoDB database design
  - React state management patterns
  - Authentication and authorization concepts

### Additional Tools
- **Vite** - https://vitejs.dev/
  - Build tool and development server

- **Axios** - https://axios-http.com/
  - HTTP client for API calls

- **dotenv** - https://github.com/motdotla/dotenv
  - Environment variable management

### Color Palette
- **Primary Blue**: `#2563EB` (Tailwind blue-600)
- **Success Green**: `#16A34A` (Tailwind green-600)
- **Error Red**: `#DC2626` (Tailwind red-600)
- **Warning Yellow**: `#EAB308` (Tailwind yellow-500)
- **Background Gray**: `#F9FAFB` (Tailwind gray-50)

---

## License

This project is created for educational purposes as part of the **Programming with Information Systems** course.

---

## Author

**[Your Name]**  
Student ID: [Your ID]  
Course: Programming with Information Systems  
Institution: [Your Institution]  
Academic Year: 2024-2025

---

## Acknowledgments

- Course instructors and teaching assistants for guidance
- MongoDB University for database design tutorials
- React community for comprehensive documentation
- Tailwind Labs for the excellent CSS framework
- OpenAI's ChatGPT for development assistance
- Fellow students for collaboration and feedback

---

**Built with ❤️ using React, Node.js, Express, and MongoDB**

*WanderOn - Making travel planning simple and collaborative*
