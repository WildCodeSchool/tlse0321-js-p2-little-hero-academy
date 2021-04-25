import { Link } from 'react-router-dom';
import './style/PenduEndGame.css';

const GameOverWindow = () => (
  <section className="game-over">
    <div>
      <h1>Oops tu as perdu</h1>
      <p>Tu as pas reussi a sauver ce hero retente ta chance</p>
    </div>
    <Link to="/pendu">
      <button type="button" className="btn-win">
        Re-commencer une partie
      </button>
    </Link>
  </section>
);

export default GameOverWindow;
