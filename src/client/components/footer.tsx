import React from 'react';
import { FaFacebook, FaInstagram, FaYelp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h2>Contact Us</h2>
                <ul>
                    <li><FaPhoneAlt />  (703) - 296 - 1979</li>
                    <li><FaMapMarkerAlt />  VA, MD, and DC</li>
                    {/* <li><a href="/book" className="link">Book Now</a></li> */}
                </ul>
            </div>
            <div className="footer-column">
                <h2>Follow Us</h2>
                <ul className="social-links">
                    <li><a href="https://www.facebook.com/profile.php?id=100029105573482" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a></li>
                    <li><a href="https://www.instagram.com/duct_clean_pro/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a></li>
                    <li><a href="https://www.yelp.com/biz/duct-clean-pro-mclean?override_cta=Request+a+Quote" target="_blank" rel="noreferrer"><FaYelp /> Yelp</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/about" className="link">About</Link></li>
                    <li><Link to="/services" className="link">Services</Link></li>
                    <li><Link to="/gallery" className="link">Gallery</Link></li>
                    <li><Link to="/reviews" className="link">Reviews</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
