import { Link } from 'react-router-dom';
import './style/PenduEndGame.css';

const GameWinWindow = () => (
  <section className="game-over">
    <div>
      <h1>Yes bien joué</h1>
      <p>Tu as reussi a sauver ce hero</p>
    </div>
    <Link to="/pendu">
      <button className="btn-win" type="button">
        Re-commencer une partie
      </button>
    </Link>
  </section>
);

export default GameWinWindow;
