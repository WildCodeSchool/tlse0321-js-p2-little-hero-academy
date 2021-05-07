import '../Styles/Gamepage.css';
import HeroRule from '../img/herogamerules.png';
import VocalRules from './VocalRules';

const Gamepage = ({ gameInformation }) => (
  <article className="game-rules-container">
    <div className="rules-heropicture-container">
      <img src={HeroRule} alt="hero" className="rules-heropicture" />
    </div>

    <div className="rules-text">
      <h2 className="gamepage-title">
        Bienvenue sur le jeu du {gameInformation.name} !
      </h2>
      <p>{gameInformation.rules}</p>
      <VocalRules gameInformation={gameInformation} />
    </div>
  </article>
);

export default Gamepage;
