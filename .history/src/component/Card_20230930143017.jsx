function Card({ imageUrl, title, onClick }) {
  return (
    <div
      className="max-w-sm  mx-4 my-4 cursor-pointer shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:scale-105"
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="px-4 py-2">
        <h3 className="text-lg text-white  align-middle  font-semibold">{title}</h3>
        {/* Add more content or description here if needed */}
      </div>
    </div>
  );
}

export default Card;
