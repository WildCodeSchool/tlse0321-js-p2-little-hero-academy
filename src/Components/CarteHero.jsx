import { useEffect, useState } from 'react';
import axios from 'axios';

const CarteHero = ({ perso }) => {
  const [hero, setHero] = useState('');

  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${perso}`;

  useEffect(() => {
    axios
      .get(urlHero)
      .then((results) => results.data)
      .then((data) => {
        setHero(data);
      });
  }, []);
  return (
    hero && (
      <div>
        <div className="DisplayHero">
          <p>{hero.name}</p>
          <img src={hero.image.url} alt="" />
          <p>Le hero est un {hero.appearance.race}</p>
          <p>Son vrai nom est {hero.biography['full-name']}</p>
          <p>Notre hero est né à {hero.biography['place-of-birth']}</p>
        </div>
      </div>
    )
  );
};

export default CarteHero;
