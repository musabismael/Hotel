import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Card({ link, icon, title, onClick }) {
  return (
    <div
      className="max-w-sm  mx-1 my-2 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
      onClick={onClick}
    >
      <div className="bg-sky-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
        <Link to={link} className="text-blue-600 hover:text-blue-800">
          {/* <img
            src={imageUrl}
            alt={title}
            className=" w-auto  h-32 object-cover"
          /> */}
          <FontAwesomeIcon
            icon={icon}
            className=" w-auto  h-32 object-cover"
            style={{"--fa-primary-opacity": "1", "--fa-secondary-color": "#9db1d2",}}
          />
<FontAwesomeIcon icon="fa-solid fa-list-check" style={{color: "#bbc9e2",}} />
          <div className="px-4 py-2 items-center">
            <h3 className=" text-white text-sm  flex flex-col text-ellipsis items-center font-semibold">
              {title}
            </h3>
            {/* Add more content or description here if needed */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
