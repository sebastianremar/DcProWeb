import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/ductcleanlogo_2.png';
import { BsFillTelephoneFill as PhoneIcon } from 'react-icons/bs';
import nadcaLogo from '../assets/images/nadca-logo.png';
import './style.css';

const NavBar: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="left-container" ref={navRef}>
          <div className="hamburger" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className={`nav-list ${isNavOpen ? 'open' : ''}`}>
            <ul>
              <li className="home-link"><Link to="/" onClick={() => setIsNavOpen(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setIsNavOpen(false)}>About</Link></li>
              <li><Link to="/services" onClick={() => setIsNavOpen(false)}>Services</Link></li>
              <li><Link to="/gallery" onClick={() => setIsNavOpen(false)}>Gallery</Link></li>
              <li><Link to="/reviews" onClick={() => setIsNavOpen(false)}>Reviews</Link></li>
            </ul>
          </div>
        </div>
        <div className="right-container">
          <a href="https://nadca.com/find-a-professional/duct-clean-pro" target="_blank" rel="noopener noreferrer" className="nadca-logo-link">
            <img src={nadcaLogo} alt="Nadca Certification Logo" className="nadca-logo" />
          </a>
          <div className="book-by-phone-container">
            <div className="phone-icon">
              <PhoneIcon />
            </div>
            <a href="tel:7032961979" style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}>
              <div className="book-number-letter-container">
                <div className="phone-number">
                  (703)-296-1979
                </div>
                <div className="book-now-letter">
                  CALL NOW
                </div>
              </div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
