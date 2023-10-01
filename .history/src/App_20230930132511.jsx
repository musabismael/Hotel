import Header from "./component/Header";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
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
