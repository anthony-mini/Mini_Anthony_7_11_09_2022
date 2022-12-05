import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';

import KasaRoutes from './components/KasaRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <KasaRoutes />
  </React.StrictMode>
);
