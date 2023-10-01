function Card({ imageUrl, title, onClick }) {
  return (
    <div
      className="max-w-sm  mx-2 my-2 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
      onClick={onClick}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center">
        <img
          src={imageUrl}
          alt={title}
          className=" w-auto  h-32 object-cover"
        />
        <div className="px-4 py-2 items-center">
          <h3 className=" text-#c3e5f8
 flex flex-col text-ellipsis items-center font-semibold">
            {title}
          </h3>
          {/* Add more content or description here if needed */}
        </div>
      </div>
    </div>
  );
}

export default Card;
