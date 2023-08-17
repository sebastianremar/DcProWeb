import React from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/ductcleanlogo_2.png';
import './style.css';

const NavBar: React.FC = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-list">
          <ul >
            <li >
              <Link to="/about">About</Link>
            </li>
            <li >
              <Link to="/services">Services</Link>
            </li>
            <li >
              <Link to="/gallery">Gallery</Link>
            </li>
            <li >
              <Link to="/reviews">Reviews</Link>
            </li>
            <li >
              <Link to="/reviews">Reviews</Link>
            </li>
          </ul>
        </div>
        <div className="book-now-button">
          <button >
            Book Now
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;