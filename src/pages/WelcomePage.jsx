// WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to Your Hotel Management Dashboard
        </h1>
        <p className="text-gray-600 mb-6">
          This dashboard provides you with the tools and features to efficiently manage your hotel operations.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Key Features Section */}
          <div className="bg-blue-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-blue-800 mb-2">Key Features</h2>
            <ul className="list-disc pl-4">
              <li>Easily manage guest reservations, check-in, and check-out.</li>
              <li>Handle guest payments and generate invoices.</li>
              <li>Provide exceptional guest services and support.</li>
              <li>Track room availability and maintenance.</li>
              <li>Gain insights into hotel performance and trends.</li>
            </ul>
          </div>
          
          {/* Getting Started Section */}
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-green-800 mb-2">Getting Started</h2>
            <p className="text-gray-600 mb-2">Ready to start managing your hotel? Here are some quick actions:</p>
            <div className="space-y-2">
              <Link to="/reservations" className="btn btn-primary">Manage Reservations</Link>
              <Link to="/billing" className="btn btn-primary">Handle Billing</Link>
              <Link to="/guest-services" className="btn btn-primary">Provide Guest Services</Link>
            </div>
          </div>
        </div>

        {/* Quick Stats Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Quick Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-yellow-100 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-yellow-800">Occupancy Rate</h3>
              <p className="text-xl font-bold text-yellow-600">85%</p>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-purple-800">Revenue (This Month)</h3>
              <p className="text-xl font-bold text-purple-600">$25,000</p>
            </div>
          </div>
        </div>

        {/* Hotel Overview Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Hotel Overview</h2>
          <p className="text-gray-600 mb-2">
            Here's a snapshot of your hotel's performance and status:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-indigo-100 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-indigo-800">Total Rooms</h3>
              <p className="text-xl font-bold text-indigo-600">100</p>
            </div>
            <div className="bg-pink-100 p-4 rounded-lg">
              <h3 className="text-md font-semibold text-pink-800">Guests Checked In</h3>
              <p className="text-xl font-bold text-pink-600">75</p>
            </div>
          </div>
        </div>

        {/* Recent Activities Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Recent Activities</h2>
          <ul className="list-disc pl-4">
            <li>New reservation made for Room 101.</li>
            <li>Guest John Doe checked in on 2023-05-15.</li>
            <li>Guest Jane Smith checked out on 2023-05-14.</li>
            {/* Add more recent activities */}
          </ul>
        </div>

        {/* Announcements Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Announcements</h2>
          <p className="text-gray-600 mb-2">Stay updated with the latest news and announcements:</p>
          <ul className="list-disc pl-4">
            <li>Special Offer: Enjoy a 20% discount on suite bookings this month.</li>
            <li>Upcoming Event: Join us for a live music night in the hotel lounge on Saturday.</li>
            {/* Add more announcements */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
