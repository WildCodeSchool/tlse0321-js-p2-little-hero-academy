import { Link } from 'react-router-dom';
import './style/PenduEndGame.css';

const GameOverWindow = () => (
  <section className="game-over">
    <div>
      <h1>Dommage !!</h1>
      <p>Tu n&apos;as pas réussi à sauver notre héros. Retente ta chance !</p>
    </div>
    <Link to="/pendu">
      <button type="button" className="btn-win">
        Recommencer une partie
      </button>
    </Link>
  </section>
);

export default GameOverWindow;
