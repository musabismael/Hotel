import React from 'react';

const Sidebar = () => {
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
    )
};

export default Header;
