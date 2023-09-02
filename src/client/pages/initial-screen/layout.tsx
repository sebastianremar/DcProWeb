import React from 'react';
import Portada from './portada/portada';
import ServicesPortada from './services/services';
import About from '../individual-screens/about/about';
import Gallery from '../individual-screens/gallery/gallery';
import PortadaReviews from '../initial-screen/reviews/Reviews';

const Layout: React.FC = () => {
  return (
    <div>
      <Portada />
      <ServicesPortada />
      <PortadaReviews />
      <Gallery />
      <About />
    </div>
  );
}

export default Layout;