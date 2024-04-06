import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// npm install react-router-dom
// "proxy":"http://127.0.0.1:8000/", package.json
// npm install @mui/material @emotion/react @emotion/styled
// npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

