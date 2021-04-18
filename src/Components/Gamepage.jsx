import React from 'react';
import '../Styles/Gamepage.css';
import Game from './Game';

const Gamepage = () => (
  <div className="gamepage">
    <div className="gamepage-container">
      <h2 className="gamepage-title">Bienvenue sur le jeu du ##### !</h2>
      <div className="game-rules">
        <div className="rules-heropicture-container">
          <img
            src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
            alt="hero"
            className="rules-heropicture"
          />
        </div>
        <div className="rules-text">
          Did someone say <em>chimichangas?</em>
        </div>
      </div>
    </div>
    <div className="game-window">
      <Game />
    </div>
  </div>
);

export default Gamepage;
