import React from "react";
import CustomButton from "../../../components/CustomButton";
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faCheck, faWind, faTshirt } from '@fortawesome/free-solid-svg-icons';

const ServicesPortada: React.FC = () => {
    return (
        <div className="services-section">
            <div className="services-portada-container">
                <div className="service-cards-desc">
                    <h2 className="services-header">Our Services</h2>
                    <p className="services-header-text">
                        Revitalize your space with Duct Clean Pro! 🌟🌟🌟
                        <br /><br />
                        If your Air ducts are dirty, the air you breathe in your home every time you use your HVAC system, is most likely dirty too. Let's make sure your family is breathing fresh air by saying goodbye to allergens, grime, and say hello to a cleaner healthier living. 
                        <br /><br />
                        <strong>Duct Clean Pro</strong>: Breathing Freshness into Your Life.
                    </p>
                    <Link to={"/services"} style={{ textDecoration: 'none' }}>
                        <CustomButton text="View more" className="view-more-button-desktop" />
                    </Link>
                </div>
                <div className="service-cards-wrapper">
                    <div className="service-card">
                        <h3 className="service-title">Air Duct Cleaning</h3>
                        <div className="service-description">
                            <div className="description-text">
                                <div className="info-line">
                                    <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                    <span className="info-text">Targeted Debris Removal</span>
                                </div>
                                <div className="info-line">
                                    <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                    <span className="info-text">Improve Air Quaility</span>
                                </div>
                                <div className="info-line">
                                    <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                    <span className="info-text">Less Dust in your Home</span>
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
                                    <span className="info-text">Fire Prevention</span>
                                </div>
                                <div className="info-line">
                                    <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                    <span className="info-text">Detailed Cleaning Procedure</span>
                                </div>
                                <div className="info-line">
                                    <FontAwesomeIcon className="checkmark" icon={faCheck} color="#97D700" />
                                    <span className="info-text">Increase Dryer Efficiency</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Link to={"/services"} style={{ textDecoration: 'none' }}>
                    <CustomButton text="View more" className="view-more-button-mobile" />
                </Link>
            </div>
        </div>
    );
}

export default ServicesPortada;
