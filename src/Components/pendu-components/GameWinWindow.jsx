import { Link } from 'react-router-dom';
import GameResult from '../GameResult';
import './style/PenduEndGame.css';

const GameWinWindow = () => (
  <section className="game-over">
    <div>
      <GameResult victory />
      <Link to="/pendu">
        <button className="btn-win" type="button">
          Recommencer une partie
        </button>
      </Link>
    </div>
  </section>
);

export default GameWinWindow;
