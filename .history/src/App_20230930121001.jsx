import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Header />

      <main className="w-3/4 p-4">
        {/* Add your content here */}
      </main>
    </div>
  );
}

export default App;
