import React, { useState } from 'react';
import '../Styles/Header.css';
import hamburger from '../img/menu.svg';
import logo from '../img/logo.png';
import Link from './headerLink/Links';

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
      <nav className="navbar">
        <img className="logo" src={logo} alt="logo-little-hero-academy" />
        <ul className={`liste-nav ${navbarOpen ? ' showMenu' : ''}`}>
          <Link to="/jeux" closeMenu={closeMenu} label="Jeux" />{' '}
          <Link to="/quiz" closeMenu={closeMenu} label="Quiz" />{' '}
          <Link to="/aboutus" closeMenu={closeMenu} label="À propos" />
          <Link to="/pendu" closeMenu={closeMenu} label="Pendu" />{' '}
          <Link to="/contactform" closeMenu={closeMenu} label="Contact" />
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
