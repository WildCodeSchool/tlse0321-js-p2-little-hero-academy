import React, { useState } from 'react';
import '../Styles/Header.css';
import humberger from '../img/humberger-menu.png';
import logo from '../img/logo.png';

const header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <div className="navigation">
      <img className="logo" src={logo} alt="logo-little-hero-academy" />
      <div className="nav-container">
        <button type="button" className="humberger-btn" onClick={handleToggle}>
          <img
            className="humberger"
            src={humberger}
            alt="humberger-menu-logo"
          />
        </button>
        <nav>
          <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <li>
              <a
                href="#Jeux"
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                Jeux
              </a>
            </li>
            <li>
              <a
                href="#Apropos"
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                activeClassName="active-link"
                onClick={() => closeMenu()}
                exact
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default header;
