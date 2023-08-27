import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faWind, faTshirt } from '@fortawesome/free-solid-svg-icons';

const ServicesPortada: React.FC = () => {
    return (
        <div className="services-section">
            <h2 className="services-header"><span>Our Services</span></h2>

            <div className="services-portada-container">
                <div className="service-card">
                    <h3 className="service-title">Air Duct Cleaning</h3>
                    <div className="service-description">
                        <div className="description-text">
                            <div className="info-line">
                                <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                <span className="info-text">Comprehensive Cleaning</span>
                            </div>
                            <div className="info-line">
                                <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                <span className="info-text">Advanced Techniques</span>
                            </div>
                            <div className="info-line">
                                <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                <span className="info-text">Improved Air Quality</span>
                            </div>
                        </div>
                        <div className="service-logo">
                            <FontAwesomeIcon icon={faWind} size="2x" color="#97D700" />
                        </div>
                    </div>
                    <a href="/services" className="learn-more-btn">Learn More</a>
                </div>

                <div className="service-card">
                    <h3 className="service-title">Dryer Vent Cleaning</h3>
                    <div className="service-description">
                        <div className="description-text">
                            <div className="info-line">
                                <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                <span className="info-text">Maintenance Concerns</span>
                            </div>
                            <div className="info-line">
                                <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                <span className="info-text">Safety and Efficiency</span>
                            </div>
                            <div className="info-line">
                                <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                <span className="info-text">Comprehensive Solution</span>
                            </div>
                        </div>
                        <div className="service-logo">
                            <FontAwesomeIcon icon={faTshirt} size="2x" color="#97D700" />
                        </div>
                    </div>
                    <a href="/services" className="learn-more-btn">Learn More</a>
                </div>
            </div>
        </div>
    );
}

export default ServicesPortada;
