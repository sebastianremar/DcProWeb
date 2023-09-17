import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './client/navigation/nav';
import Layout from './client/pages/initial-screen/layout';
import About from './client/pages/individual-screens/about/about';
import GalleryInitial from './client/pages/initial-screen/gallery/Gallery';
import Reviews from './client/pages/individual-screens/reviews/Reviews';
import Services from './client/pages/individual-screens/services/services';
import Footer from './client/components/footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="main-content">
          <NavBar />
          <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<GalleryInitial />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;