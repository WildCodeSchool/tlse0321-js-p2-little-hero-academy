import React from 'react';
import './style/HartLife.css';

const HartLife = ({ hartFinder }) => (
  <div className="hart-box">
    {hartFinder.map((harts) => (
      <h1>
        <img src={harts} alt="harts" />
      </h1>
    ))}
  </div>
);

export default HartLife;
