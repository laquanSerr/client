import React from 'react';
import './App.css';

function App() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'black', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Hello World — React works!</h1>

        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">🚀 Hello from Tailwind + React!</h1>
            <p className="text-lg text-gray-300">
              Your project is set up and working correctly.
            </p>
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-full text-white">
              Click Me
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;


