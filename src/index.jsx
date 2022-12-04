import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';
import reportWebVitals from './reportWebVitals';

import KasaRoutes from './components/KasaRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KasaRoutes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
