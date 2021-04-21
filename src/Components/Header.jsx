import React, { useState } from 'react';
import '../Styles/Header.css';
import hamburger from '../img/hamburger-menu.png';
import logo from '../img/logo.png';
import Link from './headerLink/Link';

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
      <img className="logo" src={logo} alt="logo-little-hero-academy" />
      <div className="nav-container">
        <button type="button" className="hamburger-btn" onClick={handleToggle}>
          <img
            className="hamburger"
            src={hamburger}
            alt="hamburger-menu-logo"
          />
        </button>
        <nav>
          <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <Link closeMenu={closeMenu} label="Jeux" href="#jeux" />
            <Link closeMenu={closeMenu} label="À propos" href="#apropos" />
            <Link closeMenu={closeMenu} label="Contact" href="#contact" />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default header;
