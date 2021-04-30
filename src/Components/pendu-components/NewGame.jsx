import './style/NewGame.css';

const NewGame = ({ findLetterInWord, gameNotYetStarted }) => gameNotYetStarted && (
  <section className="new-game-container">
    <div>
      <h1>Bienvenu dans le jeu du sauvetage</h1>
    </div>
    <button
      type="button"
      className="btn-game"
      onClick={() => findLetterInWord()}
    >
      Commencer la partie
    </button>
  </section>
);

export default NewGame;
