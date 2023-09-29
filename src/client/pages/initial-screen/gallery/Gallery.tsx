import React, { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import * as images from './index';
import './style.css';
const GalleryInitial: React.FC = () => {
    const imagesArray = [
        {
            original: images.aidaTaladro,
            thumbnail: images.aidaTaladro,
        },
        {
            original: images.aidaSupply,
            thumbnail: images.aidaSupply,
        },
        {
            original: images.aidaVarillas,
            thumbnail: images.aidaVarillas,
        },
        {
            original: images.vanConLogoChevereHD,
            thumbnail: images.vanConLogoChevereHD,
        },
        {
            original: images.vanHD1,
            thumbnail: images.vanHD1,
        },
        {
            original: images.antes,
            thumbnail: images.antes,
        },
        {
            original: images.despues,
            thumbnail: images.despues,
        },
        {
            original: images.empleados,
            thumbnail: images.empleados,
        },
        {
            original: images.rejilla,
            thumbnail: images.rejilla,
        },
        {
            original: images.poniendoRejilla,
            thumbnail: images.poniendoRejilla,
        },
        {
            original: images.cristianTaladro,
            thumbnail: images.cristianTaladro,
        }, 
        {
            original: images.escaleraSuppy,
            thumbnail: images.escaleraSuppy,
        },
        {
            original: images.lavandoRejilla,
            thumbnail: images.lavandoRejilla,
        }
    ];

    const [isTouchDevice, setIsTouchDevice] = useState('ontouchstart' in window);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [window.location.pathname]);

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
                    showNav={!isTouchDevice}
                />
            </div>
        </div>
    );
}

export default GalleryInitial;
