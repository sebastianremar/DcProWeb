import React from 'react';
import PortadaInitial from './portada/Portada';
import ServicesPortada from './services/services';
import About from '../individual-screens/about/about';
import GalleryInitial from './gallery/Gallery';
import PortadaReviews from '../initial-screen/reviews/Reviews';

const Layout: React.FC = () => {
  return (
    <div>
      <PortadaInitial />
      <ServicesPortada />
      <PortadaReviews />
      <GalleryInitial />
      <About />
    </div>
  );
}

export default Layout;