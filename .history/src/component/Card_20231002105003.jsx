import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card({ link, icon, title, onClick }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <div
      className={`max-w-sm mx-1 my-3 cursor-pointer shadow-lg rounded-lg overflow-hidden transition duration-300 transform ${
        isActive ? "hover:scale-105 bg-blue-600" : "hover:scale-100 bg-sky-800"
      }`}
      onClick={handleClick}
    >
      <div className="rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
        <Link to={link} className={`text-${isActive ? "white" : "blue-600"} hover:text-blue-800`}>
          <FontAwesomeIcon
            icon={icon}
            size="2xs"
            className="w-auto p-5 h-auto object-cover"
            style={{ color: "#bbc9e2" }}
          />

          <div className="px-4 py-2 items-center">
            <h3 className={`text-${isActive ? "white" : "black"} text-sm flex flex-col text-ellipsis items-center font-semibold`}>
              {title}
            </h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
