import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './client/navigation/nav';
import Layout from './client/pages/initial-screen/layout'; // Import the Layout component
import About from './client/pages/individual-screens/about/about';
import Gallery from './client/pages/individual-screens/gallery/gallery';
import Reviews from './client/pages/individual-screens/reviews/Reviews';
import Services from './client/pages/individual-screens/services/services';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Layout />} />
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
