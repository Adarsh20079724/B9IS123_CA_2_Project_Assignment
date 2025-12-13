/* ------------------------------------------------------------
   Schema Model   : seedSampleItinerary.js
   Purpose        : This file has sample data to add to mongoDB so that if nothing is present some sample
                    data should be present for testing and checking the layout
   References : 
    1. ExpressJS      : 
    2. Mongoose       : https://mongoosejs.com/docs/api/schema.html#Schema()
                      : https://mongoosejs.com/docs/api/model.html#Model()
    3. MongoDB        : 
    4. ChatGPT :
        Prompt        : Create 10 dummy users and itineraries as per model provided. (Data Sample is present in ReadMe file).
        Model file.   : Itinerary.js and Users.js
        ChatLink      : https://chatgpt.com/share/693894b9-d530-800d-bfb5-7649656b1185
-------------------------------------------------------------- */

const { User, Itinerary } = require('../models');

const seedItinUsers = async () => {
  try {
    // Check if data already exists
    const userCount = await User.countDocuments();
    const itinCount = await Itinerary.countDocuments();

    if (userCount === 0 && itinCount === 0) {
      console.log("📝 Inserting initial data into Database...");

      // Insert Users
      const users = await User.create(
        [
        {
          fullName: 'Sarah Johnson',
          email: 'sarah.johnson@test.com',
          userType: 'traveller',
          avatar: '👩'
        },
        {
          fullName: 'Mike Chen',
          email: 'mike.chen@test.com',
          userType: 'agent',
          avatar: '👨'
        },
        {
          fullName: 'Emma Rodriguez',
          email: 'emma.rodriguez@test.com',
          userType: 'traveller',
          avatar: '👩‍🦰'
        },
        {
          fullName: 'James Wilson',
          email: 'james.wilson@test.com',
          userType: 'traveller',
          avatar: '🧑'
        },
        {
          fullName: 'Lisa Anderson',
          email: 'lisa.anderson@test.com',
          userType: 'agent',
          avatar: '👩‍💼'
        },
        {
          fullName: 'David Martinez',
          email: 'david.martinez@test.com',
          userType: 'traveller',
          avatar: '👨‍💼'
        },
        {
          fullName: 'Sophie Turner',
          email: 'sophie.turner@test.com',
          userType: 'traveller',
          avatar: '👱‍♀️'
        },
        {
          fullName: 'Alex Kim',
          email: 'alex.kim@test.com',
          userType: 'traveller',
          avatar: '🧑‍💻'
        },
        {
          fullName: 'Maria Garcia',
          email: 'maria.garcia@test.com',
          userType: 'traveller',
          avatar: '👩‍🎨'
        },
        {
          fullName: 'Tom Anderson',
          email: 'tom.anderson@test.com',
          userType: 'traveller',
          avatar: '🧔'
        }
      ]
    );
      console.log(`✅ Inserted ${users.length} users`);

      // Insert Itineraries
      const itineraries = await Itinerary.create(
        [
        {
          userId: users[0]._id,
          title: 'European Summer Adventure',
          destination: 'Paris, France',
          thumbnail: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
          startDate: '2024-06-15',
          endDate: '2024-06-22',
          duration: 8,
          summary: 'A week exploring the romantic streets of Paris, visiting iconic landmarks and indulging in French cuisine.',
          status: 'published',
          isPublic: true,
          expectedBudget: 3000,
          negotiatedCost: 2800,
          tripFinalCost: 2850,
          statistics: {
            totalActivities: 3,
            totalTransfers: 1,
            totalHotels: 1,
            totalDistance: 0
          },
          days: [
            {
              dayNumber: 1,
              title: 'Arrival in Paris',
              date: '2024-06-15',
              transfer: {
                mode: 'Flight',
                from: 'JFK Airport',
                to: 'Charles de Gaulle Airport',
                departureTime: '18:00',
                arrivalTime: '08:00+1'
              },
              accommodation: {
                hotelName: 'Hotel Le Marais',
                category: 'Deluxe',
                checkIn: '14:00',
                checkOut: ''
              },
              activities: [
                {
                  name: 'Seine River Cruise',
                  time: '16:00',
                  description: 'Evening cruise along the Seine with dinner',
                  category: 'Sightseeing'
                }
              ]
            },
            {
              dayNumber: 2,
              title: 'Eiffel Tower & Louvre',
              date: '2024-06-16',
              activities: [
                {
                  name: 'Eiffel Tower Visit',
                  time: '09:00',
                  description: 'Summit access to the iconic tower',
                  category: 'Sightseeing'
                },
                {
                  name: 'Louvre Museum',
                  time: '14:00',
                  description: 'Guided tour of world-famous artworks',
                  category: 'Sightseeing'
                }
              ]
            }
          ]
        },
        {
          userId: users[1]._id,
          title: 'Discovering Japan: Tokyo to Kyoto',
          destination: 'Tokyo, Japan',
          thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
          startDate: '2024-09-10',
          endDate: '2024-09-20',
          duration: 11,
          summary: 'An immersive journey through modern Tokyo and ancient Kyoto, experiencing Japanese culture, technology, and cuisine.',
          status: 'published',
          isPublic: true,
          expectedBudget: 4500,
          negotiatedCost: 4200,
          tripFinalCost: 4300,
          statistics: {
            totalActivities: 2,
            totalTransfers: 1,
            totalHotels: 1,
            totalDistance: 0
          },
          days: [
            {
              dayNumber: 1,
              title: 'Tokyo Arrival',
              date: '2024-09-10',
              transfer: {
                mode: 'Flight',
                from: 'LAX',
                to: 'Narita International Airport',
                departureTime: '11:00',
                arrivalTime: '15:00+1'
              },
              accommodation: {
                hotelName: 'Park Hyatt Tokyo',
                category: 'Luxury',
                checkIn: '15:00',
                checkOut: ''
              },
              activities: [
                {
                  name: 'Shibuya Crossing Experience',
                  time: '18:00',
                  description: "Visit the world's busiest pedestrian crossing",
                  category: 'Sightseeing'
                },
                {
                  name: 'Ramen Dinner',
                  time: '20:00',
                  description: 'Authentic ramen at Ichiran',
                  category: 'Food'
                }
              ]
            }
          ]
        },
        {
          userId: users[2]._id,
          title: 'Bali Wellness Retreat',
          destination: 'Bali, Indonesia',
          thumbnail: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
          startDate: '2024-07-01',
          endDate: '2024-07-10',
          duration: 10,
          summary: 'A rejuvenating wellness retreat in Ubud, focusing on yoga, meditation, and spa treatments.',
          status: 'published',
          isPublic: true,
          expectedBudget: 2500,
          negotiatedCost: 2300,
          tripFinalCost: 2400,
          statistics: {
            totalActivities: 1,
            totalTransfers: 1,
            totalHotels: 1,
            totalDistance: 0
          },
          days: [
            {
              dayNumber: 1,
              title: 'Welcome to Paradise',
              date: '2024-07-01',
              transfer: {
                mode: 'Flight',
                from: 'Singapore',
                to: 'Ngurah Rai Airport',
                departureTime: '09:00',
                arrivalTime: '12:00'
              },
              accommodation: {
                hotelName: 'Como Shambhala Estate',
                category: 'Luxury',
                checkIn: '14:00',
                checkOut: ''
              },
              activities: [
                {
                  name: 'Spa Welcome Treatment',
                  time: '16:00',
                  description: 'Traditional Balinese massage',
                  category: 'Relaxation'
                }
              ]
            }
          ]
        },
        {
          userId: users[3]._id,
          title: 'Iceland Northern Lights Quest',
          destination: 'Reykjavik, Iceland',
          thumbnail: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80',
          startDate: '2024-12-15',
          endDate: '2024-12-22',
          duration: 8,
          summary: 'Chasing the Northern Lights while exploring glaciers, hot springs, and volcanic landscapes.',
          status: 'draft',
          isPublic: false,
          expectedBudget: 3500,
          negotiatedCost: 0,
          tripFinalCost: 0,
          statistics: {
            totalActivities: 1,
            totalTransfers: 0,
            totalHotels: 0,
            totalDistance: 0
          },
          days: [
            {
              dayNumber: 1,
              title: 'Arrival & Blue Lagoon',
              date: '2024-12-15',
              activities: [
                {
                  name: 'Blue Lagoon Spa',
                  time: '14:00',
                  description: 'Relax in geothermal waters',
                  category: 'Relaxation'
                }
              ]
            }
          ]
        },
        {
          userId: users[4]._id,
          title: 'Greek Islands Hopping',
          destination: 'Santorini, Greece',
          thumbnail: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
          startDate: '2024-08-05',
          endDate: '2024-08-15',
          duration: 11,
          summary: 'Island hopping through Santorini, Mykonos, and Crete with beautiful beaches and ancient ruins.',
          status: 'published',
          isPublic: true,
          expectedBudget: 4000,
          negotiatedCost: 3800,
          tripFinalCost: 3900,
          statistics: {
            totalActivities: 1,
            totalTransfers: 1,
            totalHotels: 1,
            totalDistance: 0
          },
          days: [
            {
              dayNumber: 1,
              title: 'Santorini Sunset',
              date: '2024-08-05',
              transfer: {
                mode: 'Ferry',
                from: 'Athens Port',
                to: 'Santorini Port',
                departureTime: '07:00',
                arrivalTime: '12:00'
              },
              accommodation: {
                hotelName: 'Canaves Oia Suites',
                category: 'Luxury',
                checkIn: '14:00',
                checkOut: ''
              },
              activities: [
                {
                  name: 'Oia Sunset Viewing',
                  time: '19:30',
                  description: 'Famous sunset from Oia castle',
                  category: 'Sightseeing'
                }
              ]
            }
          ]
        },
        {
          userId: users[5]._id,
          title: 'Dubai Desert Adventure',
          destination: 'Dubai, UAE',
          thumbnail: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
          startDate: '2024-10-01',
          endDate: '2024-10-04',
          duration: 4,
          summary: 'Experience the magic of Dubai from towering skyscrapers to vast desert landscapes.',
          status: 'published',
          isPublic: true,
          expectedBudget: 2800,
          negotiatedCost: 2600,
          tripFinalCost: 2650,
          statistics: { totalActivities: 8, totalTransfers: 2, totalHotels: 1, totalDistance: 0 },
          days: [
            {
              dayNumber: 1,
              title: 'Arrival & Burj Khalifa',
              date: '2024-10-01',
              transfer: { mode: 'Flight', from: 'London Heathrow', to: 'Dubai International Airport', departureTime: '14:00', arrivalTime: '23:30' },
              accommodation: { hotelName: 'Atlantis The Palm', category: 'Luxury', checkIn: '15:00' },
              activities: [
                { name: 'Burj Khalifa At The Top', time: '18:00', description: 'Visit the tallest building', category: 'Sightseeing' },
                { name: 'Dubai Fountain Show', time: '20:00', description: 'Water and light show', category: 'Sightseeing' }
              ]
            },
            {
              dayNumber: 2,
              title: 'Desert Safari',
              date: '2024-10-02',
              activities: [
                { name: 'Dubai Mall Shopping', time: '10:00', description: 'Explore largest shopping mall', category: 'Shopping' },
                { name: 'Desert Safari & Dune Bashing', time: '15:00', description: '4x4 desert adventure', category: 'Adventure' },
                { name: 'Bedouin Camp Dinner', time: '19:00', description: 'Traditional BBQ dinner', category: 'Food' }
              ]
            },
            {
              dayNumber: 3,
              title: 'Beach & Water Park',
              date: '2024-10-03',
              activities: [
                { name: 'Aquaventure Water Park', time: '10:00', description: 'Thrilling water slides', category: 'Adventure' },
                { name: 'The Lost Chambers Aquarium', time: '14:00', description: 'Underwater ruins and marine life', category: 'Sightseeing' },
                { name: 'Beach Relaxation', time: '16:00', description: 'Relax at private beach', category: 'Relaxation' }
              ]
            },
            {
              dayNumber: 4,
              title: 'Departure Day',
              date: '2024-10-04',
              transfer: { mode: 'Flight', from: 'Dubai International Airport', to: 'London Heathrow', departureTime: '03:00', arrivalTime: '07:30' },
              activities: [{ name: 'Gold Souk Visit', time: '09:00', description: 'Browse traditional gold market', category: 'Shopping' }]
            }
          ]
        },
        {
          userId: users[6]._id,
          title: 'Amsterdam City Break',
          destination: 'Amsterdam, Netherlands',
          thumbnail: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80',
          startDate: '2024-05-10',
          endDate: '2024-05-13',
          duration: 4,
          summary: 'Discover Amsterdam\'s canals, museums, and vibrant culture.',
          status: 'published',
          isPublic: true,
          expectedBudget: 1800,
          negotiatedCost: 1650,
          tripFinalCost: 1700,
          statistics: { totalActivities: 9, totalTransfers: 2, totalHotels: 1, totalDistance: 0 },
          days: [
            {
              dayNumber: 1,
              title: 'Canal Cruise & Anne Frank House',
              date: '2024-05-10',
              transfer: { mode: 'Flight', from: 'Paris CDG', to: 'Amsterdam Schiphol', departureTime: '10:00', arrivalTime: '11:30' },
              accommodation: { hotelName: 'The Hoxton Amsterdam', category: 'Deluxe', checkIn: '15:00' },
              activities: [
                { name: 'Canal Cruise', time: '14:00', description: 'Explore Amsterdam from the water', category: 'Sightseeing' },
                { name: 'Anne Frank House', time: '17:00', description: 'Visit the historic museum', category: 'Sightseeing' },
                { name: 'Dinner in Jordaan', time: '20:00', description: 'Traditional Dutch cuisine', category: 'Food' }
              ]
            },
            {
              dayNumber: 2,
              title: 'Museums & Markets',
              date: '2024-05-11',
              activities: [
                { name: 'Van Gogh Museum', time: '09:00', description: 'Largest Van Gogh collection', category: 'Sightseeing' },
                { name: 'Rijksmuseum', time: '12:00', description: 'Dutch masters and Golden Age art', category: 'Sightseeing' },
                { name: 'Albert Cuyp Market', time: '16:00', description: 'Browse famous street market', category: 'Shopping' }
              ]
            },
            {
              dayNumber: 3,
              title: 'Bikes & Windmills',
              date: '2024-05-12',
              activities: [
                { name: 'Bike Tour', time: '09:00', description: 'Cycle like a local', category: 'Adventure' },
                { name: 'Zaanse Schans Day Trip', time: '13:00', description: 'Visit windmills and cheese farms', category: 'Sightseeing' },
                { name: 'Vondelpark Picnic', time: '18:00', description: 'Relax in largest park', category: 'Relaxation' }
              ]
            },
            {
              dayNumber: 4,
              title: 'Departure',
              date: '2024-05-13',
              transfer: { mode: 'Flight', from: 'Amsterdam Schiphol', to: 'Paris CDG', departureTime: '15:00', arrivalTime: '16:30' },
              activities: []
            }
          ]
        },
        {
          userId: users[7]._id,
          title: 'New Zealand Adventure',
          destination: 'Queenstown, New Zealand',
          thumbnail: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80',
          startDate: '2024-11-15',
          endDate: '2024-11-19',
          duration: 5,
          summary: 'Adrenaline-packed adventure in the adventure capital of the world.',
          status: 'published',
          isPublic: true,
          expectedBudget: 3500,
          negotiatedCost: 3300,
          tripFinalCost: 3400,
          statistics: { totalActivities: 11, totalTransfers: 2, totalHotels: 1, totalDistance: 0 },
          days: [
            {
              dayNumber: 1,
              title: 'Arrival & Lake Wakatipu',
              date: '2024-11-15',
              transfer: { mode: 'Flight', from: 'Auckland Airport', to: 'Queenstown Airport', departureTime: '09:00', arrivalTime: '11:30' },
              accommodation: { hotelName: 'Sofitel Queenstown', category: 'Luxury', checkIn: '14:00' },
              activities: [
                { name: 'Queenstown Gardens Walk', time: '15:00', description: 'Scenic lakeside walk', category: 'Sightseeing' },
                { name: 'Skyline Gondola', time: '18:00', description: 'Panoramic views from Bob\'s Peak', category: 'Sightseeing' }
              ]
            },
            {
              dayNumber: 2,
              title: 'Extreme Adventures',
              date: '2024-11-16',
              activities: [
                { name: 'Bungy Jumping', time: '09:00', description: 'Jump from Kawarau Bridge', category: 'Adventure' },
                { name: 'Jet Boat Ride', time: '13:00', description: 'High-speed thrills on Shotover River', category: 'Adventure' },
                { name: 'Fergburger Dinner', time: '19:00', description: 'Famous gourmet burgers', category: 'Food' }
              ]
            },
            {
              dayNumber: 3,
              title: 'Milford Sound Day Trip',
              date: '2024-11-17',
              activities: [
                { name: 'Scenic Drive to Milford Sound', time: '07:00', description: 'Journey through stunning landscapes', category: 'Sightseeing' },
                { name: 'Milford Sound Cruise', time: '12:00', description: 'Cruise through the fiord', category: 'Sightseeing' },
                { name: 'Wildlife Spotting', time: '14:00', description: 'See seals, dolphins, penguins', category: 'Sightseeing' }
              ]
            },
            {
              dayNumber: 4,
              title: 'Wine & Relaxation',
              date: '2024-11-18',
              activities: [
                { name: 'Gibbston Valley Wine Tour', time: '10:00', description: 'Sample award-winning Pinot Noir', category: 'Food' },
                { name: 'Onsen Hot Pools', time: '16:00', description: 'Relax in private hot tubs', category: 'Relaxation' }
              ]
            },
            {
              dayNumber: 5,
              title: 'Departure',
              date: '2024-11-19',
              transfer: { mode: 'Flight', from: 'Queenstown Airport', to: 'Auckland Airport', departureTime: '14:00', arrivalTime: '16:30' },
              activities: [{ name: 'Arrowtown Visit', time: '09:00', description: 'Explore historic gold mining town', category: 'Sightseeing' }]
            }
          ]
        },
        {
          userId: users[8]._id,
          title: 'Morocco Cultural Journey',
          destination: 'Marrakech, Morocco',
          thumbnail: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
          startDate: '2024-04-20',
          endDate: '2024-04-23',
          duration: 4,
          summary: 'Immerse yourself in the colors, flavors, and traditions of Morocco.',
          status: 'published',
          isPublic: true,
          expectedBudget: 1600,
          negotiatedCost: 1450,
          tripFinalCost: 1500,
          statistics: { totalActivities: 10, totalTransfers: 2, totalHotels: 1, totalDistance: 0 },
          days: [
            {
              dayNumber: 1,
              title: 'Marrakech Medina',
              date: '2024-04-20',
              transfer: { mode: 'Flight', from: 'Barcelona Airport', to: 'Marrakech Menara Airport', departureTime: '08:00', arrivalTime: '09:30' },
              accommodation: { hotelName: 'Riad Yasmine', category: 'Deluxe', checkIn: '14:00' },
              activities: [
                { name: 'Jemaa el-Fnaa Square', time: '16:00', description: 'Experience bustling main square', category: 'Sightseeing' },
                { name: 'Street Food Tour', time: '19:00', description: 'Sample traditional Moroccan dishes', category: 'Food' }
              ]
            },
            {
              dayNumber: 2,
              title: 'Palaces & Gardens',
              date: '2024-04-21',
              activities: [
                { name: 'Bahia Palace', time: '09:00', description: 'Explore 19th-century palace', category: 'Sightseeing' },
                { name: 'Majorelle Garden', time: '11:30', description: 'Visit the iconic blue garden', category: 'Sightseeing' },
                { name: 'Souk Shopping', time: '15:00', description: 'Browse traditional markets', category: 'Shopping' },
                { name: 'Moroccan Cooking Class', time: '18:00', description: 'Learn to make tagine and couscous', category: 'Food' }
              ]
            },
            {
              dayNumber: 3,
              title: 'Desert & Spa',
              date: '2024-04-22',
              activities: [
                { name: 'Agafay Desert Trip', time: '09:00', description: 'Camel ride in rocky desert', category: 'Adventure' },
                { name: 'Traditional Hammam', time: '16:00', description: 'Authentic Moroccan spa experience', category: 'Relaxation' },
                { name: 'Rooftop Dinner', time: '20:00', description: 'Dine with medina views', category: 'Food' }
              ]
            },
            {
              dayNumber: 4,
              title: 'Departure',
              date: '2024-04-23',
              transfer: { mode: 'Flight', from: 'Marrakech Menara Airport', to: 'Barcelona Airport', departureTime: '12:00', arrivalTime: '15:30' },
              activities: [{ name: 'Final Souk Visit', time: '09:00', description: 'Last-minute shopping', category: 'Shopping' }]
            }
          ]
        },
        {
          userId: users[9]._id,
          title: 'Barcelona City Explorer',
          destination: 'Barcelona, Spain',
          thumbnail: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80',
          startDate: '2024-06-01',
          endDate: '2024-06-04',
          duration: 4,
          summary: 'Discover Gaudí\'s masterpieces, Mediterranean beaches, and Catalan culture.',
          status: 'draft',
          isPublic: false,
          expectedBudget: 1900,
          negotiatedCost: 0,
          tripFinalCost: 0,
          statistics: { totalActivities: 9, totalTransfers: 2, totalHotels: 1, totalDistance: 0 },
          days: [
            {
              dayNumber: 1,
              title: 'Gothic Quarter & Las Ramblas',
              date: '2024-06-01',
              transfer: { mode: 'Flight', from: 'Berlin Tegel', to: 'Barcelona El Prat', departureTime: '09:00', arrivalTime: '11:30' },
              accommodation: { hotelName: 'Hotel Arts Barcelona', category: 'Luxury', checkIn: '15:00' },
              activities: [
                { name: 'Gothic Quarter Walking Tour', time: '14:00', description: 'Explore medieval streets', category: 'Sightseeing' },
                { name: 'Las Ramblas Stroll', time: '17:00', description: 'Walk the famous boulevard', category: 'Sightseeing' },
                { name: 'Tapas Dinner', time: '20:00', description: 'Sample Spanish tapas', category: 'Food' }
              ]
            },
            {
              dayNumber: 2,
              title: 'Gaudí Day',
              date: '2024-06-02',
              activities: [
                { name: 'Sagrada Familia', time: '09:00', description: 'Tour Gaudí\'s unfinished masterpiece', category: 'Sightseeing' },
                { name: 'Park Güell', time: '13:00', description: 'Explore colorful mosaic park', category: 'Sightseeing' },
                { name: 'Casa Batlló', time: '16:00', description: 'Visit the modernist house', category: 'Sightseeing' }
              ]
            },
            {
              dayNumber: 3,
              title: 'Beach & Montjuïc',
              date: '2024-06-03',
              activities: [
                { name: 'Barceloneta Beach', time: '10:00', description: 'Relax on Mediterranean beach', category: 'Relaxation' },
                { name: 'Montjuïc Cable Car', time: '15:00', description: 'Ride to hilltop castle', category: 'Sightseeing' },
                { name: 'Magic Fountain Show', time: '21:00', description: 'Watch light and music fountain', category: 'Sightseeing' }
              ]
            },
            {
              dayNumber: 4,
              title: 'Departure',
              date: '2024-06-04',
              transfer: { mode: 'Flight', from: 'Barcelona El Prat', to: 'Berlin Tegel', departureTime: '16:00', arrivalTime: '18:30' },
              activities: []
            }
          ]
        }
      ]
    );
      console.log(`✅ Inserted ${itineraries.length} itineraries`);

      console.log("✨ Initial data successfully inserted into Database");
    } else {
      console.log("📦 Demo Data is already available in the Database");
      console.log(`   - Users: ${userCount}`);
      console.log(`   - Itineraries: ${itinCount}`);
    }
  } catch (err) {
    console.error("❌ Error in inserting data:", err);
    throw err;
  }
};

module.exports = seedItinUsers;