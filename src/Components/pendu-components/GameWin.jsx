import { Link } from 'react-router-dom';
import './style/GameWin.css';

const GameWin = () => (
  <section className="game-win">
    <div>
      <h1>Yes bien joué</h1>
      <p>Tu as reussi a sauver ce hero</p>
    </div>
    <Link to="/pendu">
      <button type="button" className="btn-over">
        Re-commencer une partie
      </button>
    </Link>
  </section>
);

export default GameWin;
