import './style/GameWin.css';

const GameWin = ({ gameWin, restartGame }) => gameWin && (
  <section className="game-win">
    <div>
      <h1>Yes bien joué</h1>
      <p>Tu as reussi a sauver ce hero</p>
    </div>
    <button type="button" className="btn-over" onClick={() => restartGame()}>
      Re-commencer une partie
    </button>
  </section>
);

export default GameWin;
