function Card({ imageUrl, title, onClick }) {
  return (
    <div
      className="max-w-sm  mx-2 my-2 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
      onClick={onClick}
    >
        
      <img  width="50" height="50" src={imageUrl} alt={title} className=" w-3 h-32 object-cover flex flex-col items-center" />
      <div className="px-4 py-2 items-center">
        <h3 className=" text-white flex flex-col text-ellipsis items-center content-center font-semibold">{title}</h3>
        {/* Add more content or description here if needed */}
      </div>
    </div>
  );
}

export default Card;
