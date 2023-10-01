import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import headImage from "./assets/bed.png"

function App() {
  return (
<div class="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <main className="p-4">
          
       

        </main>
      </div>
    </div>
  );
}

export default App;
