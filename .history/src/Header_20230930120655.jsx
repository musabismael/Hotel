// Import React and Tailwind CSS
import React from 'react';
import 'tailwindcss/tailwind.css';

// Import icons from @heroicons/react
import { MenuIcon, XIcon } from '@heroicons/react/solid';

// Define a custom component for the header
function Header() {
  // Use React state to toggle the sidebar visibility
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header section */}
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
        {/* Menu button */}
        <button
          className="text-gray-500 focus:outline-none focus:ring"
          onClick={() => setSidebarOpen(true)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        {/* Logo */}
        <div className="text-xl font-semibold text-gray-800">My App</div>
        {/* User avatar */}
        <img
          className="h-8 w-8 rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User avatar"
        />
      </div>
      {/* Sidebar section */}
      {sidebarOpen && (
        <div className="absolute inset-0 flex z-40">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Sidebar */}
          <div className="relative flex flex-col flex-shrink-0 w-64 bg-white">
            {/* Close button */}
            <button
              className="absolute top-0 right-0 p-4 text-gray-500 focus:outline-none focus:ring"
              onClick={() => setSidebarOpen(false)}
            >
              <XIcon className="h-6 w-6" />
            </button>
            {/* Sidebar content */}
            <div className="flex flex-col h-full py-4 overflow-y-auto">
              {/* Navigation links */}
              <nav className="flex flex-col px-4 space-y-2">
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-gray-700 bg-gray-200 rounded-md"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-md"
                >
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-md"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-700 rounded-md"
                >
                  Logout
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Export the component
export default Header;
