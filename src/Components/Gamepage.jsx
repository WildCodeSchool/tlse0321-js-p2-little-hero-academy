import React from 'react';
import '../Styles/Gamepage.css';

const Gamepage = () => (
  <div className="gamepage">
    <h2 className="gamepage-title">Bienvenue sur le jeu du #####, Héro !</h2>
    <div className="gamepage-container">
      <div className="game-rules">
        <div className="text-rules">
          <h4 className="rules-title">Voici les règles du jeu : </h4>
          <ul>
            <li>Règle 1</li>
            <li>Régle 2</li>
            <li>Règle 3</li>
          </ul>
        </div>
        <div className="rules-heropicture-container">
          <img
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            alt="hero"
            className="rules-heropicture"
          />
        </div>
      </div>
    </div>
    <div className="game-window">FENETRE DU JEU</div>
  </div>
);

export default Gamepage;
