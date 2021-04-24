import './style/GameOverWindow.css';

const GameOverWindow = ({ gameOver, restartGame }) => gameOver && (
  <section className="game-over">
    <div>
      <h1>Oops tu as perdu</h1>
      <p>Tu as pas reussi a sauver ce hero retente ta chance</p>
    </div>
    <button type="button" className="btn-over" onClick={() => restartGame()}>
      Re-commencer une partie
    </button>
  </section>
);

export default GameOverWindow;
