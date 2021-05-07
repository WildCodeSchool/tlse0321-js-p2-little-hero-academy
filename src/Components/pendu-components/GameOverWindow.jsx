import { Link } from 'react-router-dom';
import GameResult from '../GameResult';
import './style/PenduEndGame.css';

const GameOverWindow = () => (
  <section className="game-over">
    <div>
      <GameResult victory={false} />
      <Link to="/pendu">
        <button className="btn-win" type="button">
          Recommencer une partie
        </button>
      </Link>
    </div>
  </section>
);

export default GameOverWindow;
