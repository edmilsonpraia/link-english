import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import logo from '../assets/images/logo.png'; // Importando o logo

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Link English" className="nav-logo-image" />
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/services" className="navbar-link">Services</Link>
          <Link to="/testimonials" className="navbar-link">Testimonials</Link>
          <Link to="/contact" className="navbar-link">Contacts</Link>
        </div>
        
        <div className="social-links">
          <a href="#" className="social-link">f</a>
          <a href="#" className="social-link">x</a>
          <a href="#" className="social-link">in</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;