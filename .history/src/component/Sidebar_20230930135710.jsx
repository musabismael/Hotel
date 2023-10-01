import Card from "./Card";

const Sidebar = () => {

  const cardData = [
    {
      id: 1,
      title: "Card 1",
      imageUrl: "https://placeimg.com/300/200/nature",
    },
    {
      id: 2,
      title: "Card 2",
      imageUrl: "https://placeimg.com/300/200/animals",
    },
    {
      id: 3,
      title: "Card 3",
      imageUrl: "https://placeimg.com/300/200/architecture",
    },
  ];
  const handleCardClick = (id) => {
    console.log(`Card with ID ${id} clicked`);
  };
  return (
    <aside className="bg-gray-200 w-1/5 min-h-screen p-4">
      <nav>

        {cardData.map((card) => (
          <Card
            key={card.id}
            imageUrl={card.imageUrl}
            title={card.title}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
