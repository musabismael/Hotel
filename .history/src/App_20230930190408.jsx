import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="flex bg-gradient-to-r from-sky-900 via-sky-500 to-sky-700">
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
