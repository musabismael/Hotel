import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      
      <div className="flex-1">
        <Sidebar />

        {/* Your main content goes here */}
        <main className="p-4">
          <h2 className="text-2xl font-bold">Main Content</h2>
          {/* Add your content here */}
        </main>
      </div>
    </div>
  );
}

export default App;
