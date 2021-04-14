import React from 'react';
import '../Styles/Header.css';

const header = () => (
  <div className="navigation">
    <nav>
      <h1>Little Hero Academy</h1>
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
);

export default header;
