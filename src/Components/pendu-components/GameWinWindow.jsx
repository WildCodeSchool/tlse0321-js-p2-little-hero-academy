import { Link } from 'react-router-dom';
import './style/PenduEndGame.css';

const GameWinWindow = () => (
  <section className="game-over">
    <div>
      <h1>Bravo !!</h1>
      <p>Tu as réussi à sauver notre héros ! </p>
    </div>
    <Link to="/pendu">
      <button className="btn-win" type="button">
        Recommencer une partie
      </button>
    </Link>
  </section>
);

export default GameWinWindow;
