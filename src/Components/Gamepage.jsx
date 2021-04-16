import React from 'react';
import '../Styles/Gamepage.css';

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
        <div className="rules-container">
          <p className="bubble speech">
            Attention, héro, dans ce jeu du quizz, il faut bien répondre au
            maximum de question !
            <ul>
              <li>Il y a 10 questions, toutes surun seul hero</li>
              <li>
                Si tu as au moins 5 bonnes réponses, tu remporte une carte !
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
    <div className="game-window">FENETRE DU JEU</div>
  </div>
);

export default Gamepage;
