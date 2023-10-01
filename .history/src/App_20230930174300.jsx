import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import headImage from "./assets/"

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
          <img
            src="./assets/bed.png" 
            alt="Main Image"
            className="my-4 max-w-full h-auto"
          />
       

        </main>
      </div>
    </div>
  );
}

export default App;
