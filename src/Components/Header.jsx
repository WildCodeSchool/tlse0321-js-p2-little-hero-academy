import React, { useState } from 'react';
import '../Styles/Header.css';
import hamberger from '../img/hamberger-menu.png';
import logo from '../img/logo.png';
import LinkJeux from './headerLink/LinkJeux';
import LinkApropos from './headerLink/LinkApropos';
import LinkContact from './headerLink/LinkContact';

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
        <button type="button" className="hamberger-btn" onClick={handleToggle}>
          <img
            className="hamberger"
            src={hamberger}
            alt="hamberger-menu-logo"
          />
        </button>
        <nav>
          <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <LinkJeux closeMenu={closeMenu} />
            <LinkApropos closeMenu={closeMenu} />
            <LinkContact closeMenu={closeMenu} />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default header;
