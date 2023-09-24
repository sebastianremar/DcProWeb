import React, { useEffect, useRef } from "react";
import './style.css';

import image1 from '../../../assets/images/IMG_6194.jpg';
import image2 from '../../../assets/gallery/van_hd_1.png';


const Services: React.FC = () => {
    const topElementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, [window.location.pathname]);

    return (
        <div className="services-section-individual">
            <section className="services-content-individual">
                <div className="services-flex-container-individual">
                    <div className="services-flex-text-individual">
                        <h1>Air Duct Cleaning</h1>
                        <p>At Duct Clean Pro, we offer premium air duct cleaning services in McLean, VA, and the surrounding areas. Our team utilizes advanced techniques to ensure comprehensive cleaning and improved air quality. With our services, you can experience optimal HVAC system performance and a significant reduction in fire hazards.</p>
                        <p>We understand the importance of maintaining a healthy living environment, which is why our services are essential for homes with pets and those that have recently undergone construction. Choose Duct Clean Pro and breathe the difference today!</p>
                    </div>
                    <div className="services-flex-image-individual">
                        <img src={image1} alt="Air Duct Cleaning" />
                    </div>
                </div>

                <div className="services-flex-container-reverse-individual">
                    <div className="services-flex-text-individual">
                        <h1>Dryer Vent Cleaning</h1>
                        <p>Your safety is our top priority at Duct Clean Pro. We offer meticulous dryer vent cleaning services across Virginia, Maryland, and DC to ensure your laundry operations are safe and efficient. If you experience prolonged drying cycles, excessive lint trap clogs, or heat up in your laundry area, it might be time to have your dryer vents inspected and cleaned.</p>
                        <p>Our comprehensive solutions go beyond simple vent cleaning, extending to the interior and exterior of the dryer duct. Choose Duct Clean Pro for secure and efficient laundry operations today!</p>
                    </div>
                    <div className="services-flex-image-individual">
                        <img src={image2} alt="Dryer Vent Cleaning" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;
