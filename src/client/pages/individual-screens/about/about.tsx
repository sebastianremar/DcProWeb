import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import image1 from '../../../assets/images/IMG_6161-1.jpg';
import image2 from '../../../assets/gallery/van_con_logo_chevere_hd_resize_compressed.png';

const About: React.FC = () => {

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [window.location.pathname]);

    return (
        <section className="about-section">
            <div className="flex-container">
                <div className="flex-text">
                    <h1>About Duct Clean Pro</h1>
                    <p>
                        Duct Clean Pro has over 13 years of vent cleaning experience. Our business is located in McLean, VA, but we serve many areas in Maryland, Virginia, and Washington, DC. More than 7,000 systems have been cleaned in homes, apartments, workplaces, restaurants, and fire stations, assuring our clients increased system efficiency, better health, and more comfortable living and working environments.
                    </p>
                    <p>
                        We are committed to providing the best service possible to our clients, and we adhere to the rules set forth by the National Air Duct Cleaners Association. Our small business offers superior-quality service at reasonable rates. We present our clients with before and after images to demonstrate our exceptional work and ensure their satisfaction. Seeing our clients happy is rewarding; thus, we will continue to do an excellent job throughout our service areas.
                    </p>
                </div>
                <div className="flex-image">
                    <img src={image1} alt="HVAC technician working" />
                </div>
            </div>

            <div className="flex-container-reverse">
                <div className="flex-text">
                    <h1>Our History</h1>
                    <p>
                        We are a Family owned business that started in 2009. In 2014 we got certified by the "National Air Duct Cleaners Association" (NADCA) which means we follow their strict guidelines for air duct cleaning. Our attention to detail and dedication separates our work from the competition. We treat your homes as if they were ours, which gives peace of mind to all our clients and assures that their ducts will end up spotless. We have the experience and the equipment to offer you the Best Service in the area for the best price. Available services:
                    </p>
                    <div className="button-container-about">
                        <Link to="/reviews" style={{ textDecoration: 'none' }}>
                            <button>
                                Happy Customers
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="flex-image">
                    <img src={image2} alt="Image description" />
                </div>
            </div>
        </section>
    );
};

export default About;
