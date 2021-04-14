import React from 'react';
import '../Styles/Header.css';
import humberger from '../img/humberger-menu.png';
import logo from '../img/logo.png';

const header = () => (
  <div className="navigation">
    <img className="logo" src={logo} alt="logo-little-hero-academy" />
    <div className="nav-container">
      <button type="button" className="humberger-btn">
        <img className="humberger" src={humberger} alt="humberger-menu-logo" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="#Jeux">Jeux</a>
          </li>
          <li>
            <a href="#Apropos">À propos</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

export default header;
