import './style/NewGame.css';

const NewGame = ({ findLetterInWord }) => (
  <section className="new-game-container">
    <button
      type="button"
      className="btn-game"
      onClick={() => findLetterInWord()}
    >
      newGame
    </button>
  </section>
);

export default NewGame;
