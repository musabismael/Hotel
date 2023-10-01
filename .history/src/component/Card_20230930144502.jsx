function Card({ imageUrl, title, onClick }) {
  return (
    <div
    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 cursor-pointer hover:shadow-xl transition duration-300 transform hover:scale-105"
    onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="px-4 py-2 items-center">
        <h3 className="text-lg text-white   font-semibold">{title}</h3>
        {/* Add more content or description here if needed */}
      </div>
    </div>
  );
}

export default Card;
