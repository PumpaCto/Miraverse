import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Genel stiller (index.css olacak ya da boş olabilir)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
