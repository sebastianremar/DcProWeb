import React from "react";
import './style.css';


const Services: React.FC = () => {
    return (
        <div className="services-container">
            <div className="titulo">
                AIR DUCT & DRYER VENT CLEANING
            </div>
            <div className="cleaning-container">
                <div className="text-and-title duct">
                    <h1>Air Duct Cleaning</h1>
                    <div className="cleaning-text">
                        <h2>Experience Premium Air Duct Cleaning with Duct Clean Pro!</h2>
                        <p>Located in the heart of McLean, VA, and serving its surrounding regions, we pride ourselves on our meticulous approach to air duct cleaning. Here's why homeowners trust us:</p>
                        <ul>
                            <li>
                                <span className="strong-content"><strong>Comprehensive Cleaning:</strong></span>
                                <span className="li-content">We begin with a thorough cleaning of your air duct system, addressing returns and the furnace.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Advanced Techniques:</strong></span>
                                <span className="li-content">Our team uses state-of-the-art methods to vacuum the central duct, sanitize main lines, and guarantee an efficient HVAC system.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Fire Hazard Elimination:</strong></span>
                                <span className="li-content">Our solutions clear out lint, significantly reducing the risk of dryer fires.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Improved Air Quality:</strong></span>
                                <span className="li-content">Eliminate contaminants that affect your indoor air quality, creating a healthier environment.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Optimal System Performance:</strong></span>
                                <span className="li-content">By cleaning both dryer and AC systems, we ensure optimal efficiency and longevity.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Special Considerations:</strong></span>
                                <span className="li-content">Our services are essential for homes with pets and properties that have recently undergone construction.</span>
                            </li>

                        </ul>
                        <h2>Choose Duct Clean Pro and breathe the difference today!</h2>
                    </div>
                </div>
                <div className="cleaning-image duct">

                </div>
            </div>
            <div className="cleaning-container">
                <div className="cleaning-image dryer">

                </div>
                <div className="text-and-title dryer">
                    <h1>Dryer Vent Cleaning</h1>
                    <div className="cleaning-text">
                        <h2>Your Safety is Our Priority!</h2>
                        <p>For meticulous dryer vent cleaning across Virginia, Maryland, and DC, trust Duct Clean Pro.</p>
                        <ul>
                            <li>
                                <span className="strong-content"><strong>Maintenance Concerns:</strong></span>
                                <span className="li-content">Address issues promptly if your drying cycle drags on, your laundry area heats up, or the lint trap clogs excessively.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Safety and Efficiency:</strong></span>
                                <span className="li-content">Neglected vents can pose fire hazards. Our services boost dryer efficiency and reduce risks.</span>
                            </li>
                            <li>
                                <span className="strong-content"><strong>Comprehensive Solution:</strong></span>
                                <span className="li-content">Beyond vent cleaning, we cleanse the dryer duct's interior and exterior, providing a complete solution.</span>
                            </li>
                        </ul>
                        <h2>Choose Duct Clean Pro for secure and efficient laundry!</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Services;