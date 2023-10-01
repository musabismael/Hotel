import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import headImage from "./assets/bed.png"

function App() {
  return (
    <div className="flex bg-gradient-to-r from-blue-500 via-sky-500 to-blue-500">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
          {/* <img
            src={headImage}
            alt="Main Image"
            className=" w-full"
          /> */}
       

        </main>
      </div>
    </div>
  );
}

export default App;
