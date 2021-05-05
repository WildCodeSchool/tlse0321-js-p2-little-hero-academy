import React from 'react';
import './style/HartLife.css';

const HartLife = ({ hartFinder }) => (
  <div className="hart-container">
    <h2 className="hart-title">Nombre de vies restantes : </h2>
    <div className="hart-box">
      {hartFinder.map((harts) => (
        <h1>
          <img src={harts} alt="harts" />
        </h1>
      ))}
    </div>
  </div>
);

export default HartLife;
