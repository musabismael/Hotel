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
          {/* Add your content here */}
          <p>
            Welcome to your hotel management system. Here, you can manage
            reservations, guest check-in/check-out, room assignments, and more.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            velit ac turpis volutpat facilisis.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
