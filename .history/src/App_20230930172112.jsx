import Header from "./component/Header";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        {/* Your main content goes here */}
        <main className="p-4">
          <h2 className="text-2xl font-bold">Main Content</h2>
   

          {/* Image */}
          <img
            src="https://example.com/your-image.jpg" // Replace with your image URL
            alt="Main Image"
            className="my-4 max-w-full h-auto"
          />

          {/* Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
            Add to Card
          </button>

          {/* Add more content here */}
        </main>
      </div>
    </div>
  );
}

export default App;
