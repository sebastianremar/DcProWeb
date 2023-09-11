import React from 'react';
import { FaFacebook, FaInstagram, FaYelp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="/about" className="link">About</a></li>
                    <li><a href="/services" className="link">Services</a></li>
                    <li><a href="/gallery" className="link">Gallery</a></li>
                    <li><a href="/reviews" className="link">Reviews</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Contact Us</h2>
                <ul>
                    <li><FaPhoneAlt />  (703) - 296 - 1979</li>
                    <li><FaMapMarkerAlt />  VA, MD, and DC</li>
                    <li><a href="/book" className="link">Book Now</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Follow Us</h2>
                <ul className="social-links">
                    <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /> Facebook</a></li>
                    <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram</a></li>
                    <li><a href="https://www.yelp.com/" target="_blank" rel="noreferrer"><FaYelp /> Yelp</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
