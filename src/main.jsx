import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Must exist
import './App.css'; // Must exist

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
