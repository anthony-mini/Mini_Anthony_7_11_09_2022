import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Lodging from '../../pages/Lodging';
import Error from '../../pages/Error';

export default function KasaRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/logement" element={<Lodging />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
