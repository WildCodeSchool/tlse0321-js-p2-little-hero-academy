import React, { useState } from 'react';

import axios from 'axios';
import DisplayHeros from './DisplayHeros';

// Fonction Super-Héros
const heros = [
  38,
  69,
  30,
  346,
  620,
  659,
  149,
  165,
  106,
  213,
  263,
  717,
  720,
  201,
  332,
  238,
  480,
  418,
  644,
  729,
  309,
  308,
  310,
];

function getRandomHero(max) {
  return Math.floor(Math.random() * max);
}

function SuperHeros() {
  const [hero, setHero] = useState('');

  const randomIdHero = getRandomHero(22);
  const randomHero = heros[randomIdHero];
  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${randomHero}`;

  const getHero = () => {
    axios
      .get(urlHero)
      .then((results) => results.data)
      .then((data) => {
        setHero(data);
      });
  };
  return (
    <div className="App">
      <DisplayHeros hero={hero} />
      <button type="button" onClick={getHero}>
        New Hero
      </button>
    </div>
  );
}

export default SuperHeros;
