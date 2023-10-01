import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import headImage from "./assets/bed.png"

function App() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
          <img
            src={headImage}
            width="100%"
            alt="Main Image"
          />
       

        </main>
      </div>
    </div>
  );
}

export default App;
