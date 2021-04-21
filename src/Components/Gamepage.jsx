import React from 'react';
import '../Styles/Gamepage.css';
import Game from './Game';
import VocalRules from './VocalRules';

const Gamepage = () => (
  <section className="gamepage">
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
        <div className="vocal-rules">
          <VocalRules rules="Bienvenue dans le Quiz! Dans ce jeu tu dois répondre à une serie de 10 questions. Mieux tu réponds aux questions, plus ta note finale sera élevée. Bonne chance! " />
        </div>
      </div>
    </div>
    <div className="game-window">
      <Game />
    </div>
  </section>
);

export default Gamepage;
