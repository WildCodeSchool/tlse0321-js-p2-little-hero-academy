import '../Styles/Gamepage.css';
import VocalRules from './VocalRules';

const Gamepage = ({ gameInformation }) => (
  <article className="gamepage-container">
    <h2 className="gamepage-title">
      Bienvenue sur le jeu du {gameInformation.name} !
    </h2>
    <div className="game-rules">
      <div className="rules-heropicture-container">
        <img
          src="https://i.ibb.co/1njD7r4/avatar-1619777354401.png"
          alt="hero"
          className="rules-heropicture"
        />
      </div>
      <div className="rules-text">
        <p>{gameInformation.rules}</p>
      </div>
      <VocalRules gameInformation={gameInformation} />
    </div>
  </article>
);

export default Gamepage;
