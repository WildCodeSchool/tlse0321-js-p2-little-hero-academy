import './style/NewGame.css';

const NewGame = ({ findLetterInWord, gameStarted }) => gameStarted && (
  <section className="new-game-container">
    <div>
      <h1>Bienvenu au jeux du sauvetage</h1>
      <p>Clique sur le bouton pour commencer le jeux , Bonne chance</p>
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
