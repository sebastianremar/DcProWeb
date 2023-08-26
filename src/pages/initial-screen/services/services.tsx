import React from "react";
import './style.css';

const ServicesPortada: React.FC = () => {
    return (
        <div className="services-section">
            <h2 className="services-header">Get to know more about our services</h2>

            <div className="services-portada-container">
-                <div className="service-card">
                    <div className="service-logo">✔️</div>
                    <h3 className="service-title">Air Duct Cleaning</h3>
                    <div className="service-description">
                        <div className="info-line">
                            <span className="checkmark">✔️</span> Comprehensive Cleaning
                        </div>
                        <div className="info-line">
                            <span className="checkmark">✔️</span> Advanced Techniques
                        </div>
                        <div className="info-line">
                            <span className="checkmark">✔️</span> Improved Air Quality
                        </div>
                    </div>
                    <button className="learn-more-btn">Learn More</button>
                </div>

-                <div className="service-card">
                    <div className="service-logo">✔️</div> 
                    <h3 className="service-title">Dryer Vent Cleaning</h3>
                    <div className="service-description">
                        <div className="info-line">
                            <span className="checkmark">✔️</span> Maintenance Concerns
                        </div>
                        <div className="info-line">
                            <span className="checkmark">✔️</span> Safety and Efficiency
                        </div>
                        <div className="info-line">
                            <span className="checkmark">✔️</span> Comprehensive Solution
                        </div>
                    </div>
                    <button className="learn-more-btn">Learn More</button>
                </div>
            </div>
        </div>
    );
}

export default ServicesPortada;
