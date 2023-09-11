import React from 'react';
import Portada from './portada/Portada';
import ServicesPortada from './services/services';
import GalleryInitial from './gallery/Gallery';
import ReviewsPortada from '../initial-screen/reviews/Reviews';
import Footer from '../../components/footer';

const Layout: React.FC = () => {
  return (
    <div>
      <Portada />
      <ServicesPortada />
      <ReviewsPortada />
      <GalleryInitial />
      <Footer />
    </div>
  );
}

export default Layout;