import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/ductcleanlogo_2.png';
import { BsFillTelephoneFill as PhoneIcon } from 'react-icons/bs';
import CustomButton from "../components/CustomButton";
import './style.css';

const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 25;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="left-container">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="nav-list" style={{ display: scrolled ? 'none' : 'flex' }}>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <div className="book-by-phone-container">
            <div className="phone-icon">
              <PhoneIcon />
            </div>
            <div className="book-number-letter-container">
              <div className="phone-number">
                (703)-296-1979
              </div>
              <div className="book-now-letter">
                CALL NOW
              </div>
            </div>
          </div>
          <div className="book-now-button">
            <CustomButton text="Book Now"/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;