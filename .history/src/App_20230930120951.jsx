import Sidebar from './Sidebar';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="w-3/4 p-4">
        <Header />
        {/* Add your content here */}
      </main>
    </div>
  );
}

export default App;
