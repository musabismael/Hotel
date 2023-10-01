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
   

          {/* Image */}
          <img
            src="./assets/bed.png" 
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
