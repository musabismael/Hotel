import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  const cardData = [
    {
      id: 1,
      title: "Service 1",
      description: "Description for Service 1",
      imageUrl: "https://example.com/service1.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      title: "Service 2",
      description: "Description for Service 2",
      imageUrl: "https://example.com/service2.jpg", // Replace with actual image URL
    },
  ];
  return (
    <div className="flex bg-gradient-to-r from-sky-900 via-sky-500 to-sky-700">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
        <div className="flex justify-between mt-4">
            {cardData.map((card) => (
              <Card
                key={card.id}
                imageUrl={card.imageUrl}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
       

        </main>
      </div>
    </div>
  );
}

export default App;
