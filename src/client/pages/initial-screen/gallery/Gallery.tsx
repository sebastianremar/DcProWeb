import React from "react";
import ImageGallery from 'react-image-gallery';
import * as images from './index';
import './style.css';

const GalleryInitial: React.FC = () => {
    const imagesArray = [
        {
            original: images.azulResizedImage,
            thumbnail: images.azulResizedImage,
        },
        {
            original: images.escaleraSecadoraHD,
            thumbnail: images.escaleraSecadoraHD,
        },
        {
            original: images.vanConLogoChevereHD,
            thumbnail: images.vanConLogoChevereHD,
        },
        {
            original: images.vanHD1,
            thumbnail: images.vanHD1,
        },
    ];

    return (
        <div className="component-container">
            <h2 className="gallery-title">Gallery</h2>
            <div className="gallery-container">
                <ImageGallery
                    items={imagesArray}
                    additionalClass="gallery-image"
                    showFullscreenButton={false}
                    showPlayButton={false}
                    thumbnailPosition="bottom"
                    showNav={true}
                />
            </div>
        </div>
    );
}

export default GalleryInitial;
