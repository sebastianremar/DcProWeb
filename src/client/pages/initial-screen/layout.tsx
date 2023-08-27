import React from 'react';
import Portada from './portada/portada';
import ServicesPortada from './services/services';
import About from '../individual-screens/about/about';
import Gallery from '../individual-screens/gallery/gallery';
import Reviews from '../individual-screens/reviews/Reviews';

const Layout: React.FC = () => {
  return (
    <div>
      <Portada />
      <ServicesPortada />
      <Gallery />
      <Reviews />
      <About />
    </div>
  );
}

export default Layout;