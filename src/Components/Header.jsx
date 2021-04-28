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
      <nav>
        <img className="logo" src={logo} alt="logo-little-hero-academy" />
        <ul className={`liste-nav ${navbarOpen ? ' showMenu' : ''}`}>
          <Link closeMenu={closeMenu} to="/jeux" label="Jeux" href="jeux" />
          <Link closeMenu={closeMenu} to="/quiz" label="Quiz" href="quiz" />
          <Link closeMenu={closeMenu} to="/pendu" label="Pendu" href="Pendu" />
          <Link
            closeMenu={closeMenu}
            to="/aboutus"
            label="À propos"
            href="apropos"
          />
          <Link
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
