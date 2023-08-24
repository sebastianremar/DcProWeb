// This will be the layout whenever the page is first loaded.
import React from 'react';
import Portada from '../pages/portada/portada';
import Services from '../pages/services/services';
import About from '../pages/about/about';
import Gallery from '../pages/gallery/gallery';
import Reviews from '../pages/reviews/reviews';

const Layout: React.FC = () => {
  return (
    <div>
      <Portada />
      <Services />
      <About />
      <Gallery />
      <Reviews />
    </div>
  );
}

export default Layout;