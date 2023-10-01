// Import React and Tailwind
import React from 'react';
import 'tailwindcss/tailwind.css';

// Define a Header component
const Header = () => {
  // Return the JSX code for the header
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-gray-800">
      {/* Logo section */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-xl font-bold text-white">My App</h1>
      </div>
      {/* Navigation section */}
      <nav className="flex items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Home</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">About</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Export the Header component
export default Header;
