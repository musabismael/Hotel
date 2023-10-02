import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faSearch,
  faSignInAlt,
  faUserPlus,
  faUser,
  faCog,
  faSignOutAlt,
  faLanguage,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from '../assets/logo.png'

function Header() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState("light");

  const handleLogout = () => {
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={`bg-white shadow-md p-4 flex justify-between items-center sticky top-0 w-full`}>
      <div className="flex items-center">
        <a href="/" ><img src={Logo} alt="Hotel Logo" className="w-10 h-10 mr-4" /></a>
        <h1 className={`text-2xl font-bold text-black`}>Hotel</h1>
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="group relative">
            <button className={`text-black mr-4 focus:outline-none`}>
              <img src={user.avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
            </button>
            <div className={`hidden group-hover:block absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg`}>
              <a href="/profile" className={`block px-4 py-2 hover:bg-gray-100`}>
                <FontAwesomeIcon icon={faUser} className={`text-gray-600 mr-2`} />
                Profile
              </a>
              <a href="/settings" className={`block px-4 py-2 hover:bg-gray-100`}>
                <FontAwesomeIcon icon={faCog} className={`text-gray-600 mr-2`} />
                Settings
              </a>
              <button
                onClick={handleLogout}
                className={`block px-4 py-2 hover:bg-gray-100 w-full text-left text-red-600`}
              >
                <FontAwesomeIcon icon={faSignOutAlt} className={`text-gray-600 mr-2`} />
                Logout
              </button>
            </div>
          </div>
        ) : (
          <>
            <a href="/login" className={`text-black mr-4 hover:underline`}>
              <FontAwesomeIcon icon={faSignInAlt} className={`text-lg`} /> Login
            </a>
            <a href="/register" className={`text-black mr-4 hover:underline`}>
              <FontAwesomeIcon icon={faUserPlus} className={`text-lg`} /> Register
            </a>
          </>
        )}
        <FontAwesomeIcon icon={faSearch} className={`text-black text-lg mr-4`} />
        <div className="relative">
          <FontAwesomeIcon icon={faBell} className={`text-black text-lg mr-4`} />
          {/* Add a notification indicator here */}
        </div>
        <FontAwesomeIcon icon={faLanguage} className={`text-black text-lg mr-4`} />
        <button onClick={toggleTheme} className={`text-black text-lg focus:outline-none`}>
          {theme === "light" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
        </button>
        {/* Add other icons or elements on the right side here */}
      </div>
    </header>
  );
}

export default Header;
  