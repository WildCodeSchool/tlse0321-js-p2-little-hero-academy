import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';
import hamburger from '../img/menu.svg';
import logo from '../img/logo.png';
import Links from './headerLink/Links';

const header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  const redimensionnement = () => {
    if (window.matchMedia('(min-width: 768px)').matches) {
      setNavbarOpen(false);
    }
  };
  window.addEventListener('resize', redimensionnement);

  return (
    <div className="header">
      <nav>
        <Link to="/" label="home">
          <img className="logo" src={logo} alt="logo-little-hero-academy" />
        </Link>
        <ul className={`liste-nav ${navbarOpen ? ' showMenu' : ''}`}>
          <Links closeMenu={closeMenu} to="/jeux" label="Jeux" href="jeux" />
          <Links
            closeMenu={closeMenu}
            to="/aboutus"
            label="À propos"
            href="apropos"
          />
          <Links
            closeMenu={closeMenu}
            to="/contactform"
            label="Contact"
            href="contact"
          />
        </ul>
        <button type="button" className="hamburger-btn" onClick={handleToggle}>
          <img
            className="hamburger"
            src={hamburger}
            alt="hamburger-menu-logo"
          />
        </button>
      </nav>
    </div>
  );
};

export default header;
