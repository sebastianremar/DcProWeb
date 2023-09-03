import React from "react";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faWind, faTshirt } from '@fortawesome/free-solid-svg-icons';

const ServicesPortada: React.FC = () => {
    return (
        <div className="services-section">
            <div className="services-portada-container">
                <div className="service-cards-desc">
                    <h2 className="services-header">Our Services</h2>
                    <p className="services-header-text">Lorem ipsum dolor sit amet consectetur adipiscing elit laoreet, netus class condimentum
                        facilisi luctus sociosqu parturient. Vestibulum convallis mattis scelerisque</p><a href="/services"
                            className="learn-more-btn">View more</a>
                </div>
                <div className="service-cards-wrapper">
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
                        </div>
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesPortada;
