import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="flex">
      <main className="w-3/4 p-4">
        <Header />
        {/* Add your content here */}
      </main>
    </div>
  );
}

export default App;
