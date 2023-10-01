jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
    <header className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link to="/" className="text-white font-bold text-xl">
            My App
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
 );
};

const Sidebar = () => {
 return (
    <aside className="bg-gray-800 py-6">
      <div className="container mx-auto">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block px-4 py-2 rounded-md text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block px-4 py-2 rounded-md text-white">
              Settings
            </Link>
          </li>
          <li>
            <Link to="/profile" className="block px-4 py-2 rounded-md text-white">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </aside>
 );
};

export { Header, Sidebar };