import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navigation/nav';
import About from './pages/about/about';
import Gallery from './pages/gallery/gallery';
import Reviews from './pages/reviews/reviews';
import Services from './pages/services/services';
import Portada from './pages/portada/portada';

// TODO: Ability to see all screens if scrolling down
const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Portada />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
