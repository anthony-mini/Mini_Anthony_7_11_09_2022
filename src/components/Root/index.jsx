import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home';
import About from '../../pages/About';
import Lodging from '../../pages/Lodging';
import Error from '../../pages/Error';
import Footer from '../Footer';

export default function Root() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/logement/:id" element={<Lodging />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}
