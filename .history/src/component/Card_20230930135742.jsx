function Card({ imageUrl, title, onClick }) {
  return (
    <div
      onClick={onClick}
    >
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover" />
      <div className="px-4 py-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        {/* Add more content or description here if needed */}
      </div>
    </div>
  );
}

export default Card;
