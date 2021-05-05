import { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/Codex.css';
import ReactCardFlip from 'react-card-flip';

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

  const [isFlipped, setIsFlipped] = useState(false);
  function handleFlipped() {
    setIsFlipped(!isFlipped);
  }
  return (
    hero && (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card">
          <button className="card__inner" type="button" onClick={handleFlipped}>
            <div className="card__face card__face--front">
              <h1>{hero.name}</h1>
              <img src={hero.image.url} alt="" />
            </div>
          </button>
        </div>

        <div className="card">
          <button className="card__inner" type="button" onClick={handleFlipped}>
            <div className="card__face card__face--back">
              <div className="card__content">
                <div className="card__header">
                  <img src={hero.image.url} alt="" />
                  <h2>{hero.name}</h2>
                </div>
                <div className="card__body">
                  <h3>Ce hero est un {hero.appearance.race}</h3>
                  <h3>Son vrai nom est {hero.biography['full-name']}</h3>
                  <h3>
                    Notre hero est né à {hero.biography['place-of-birth']}
                  </h3>
                </div>
              </div>
            </div>
          </button>
        </div>
      </ReactCardFlip>
    )
  );
};

export default CarteHero;
