import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import headImage from "./assets/bed.png"

function App() {
  return (
    <div className="flex bg-[url('/img/hero-pattern.svg')]">
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
