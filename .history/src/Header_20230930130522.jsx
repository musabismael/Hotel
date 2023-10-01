import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell,faSearchPlus } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBars} className="text-black mr-4 text-lg color" />
        <h1 className="text-2xl font-bold text-black">Hotel</h1>
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faBell} className="text-black text-lg mr-4" />
        <FontAwesomeIcon icon={faSearchPlus} className="text-black text-lg mr-4" />

        {/* Add other icons or elements on the right side here */}
      </div>
    </header>
  );
}

export default Header;
