import Letter from './Letter';
import Keyboard from './Keyboard';
import NewGame from './NewGame';
import './style/GameWindow.css';
import GameOverWindow from './GameOverWindow';

const GameWindow = (props) => {
  const {
    handleClick,
    count,
    showLetter,
    word,
    setCount,
    setAlphabet,
    alphabet,
    findLetterInWord,
    gameNotYetStarted,
    gameOver,
    restartGame,
  } = props;

  return (
    <section className="window-container">
      <h1>Pendu</h1>
      <h1>{count}</h1>
      <Letter showLetter={showLetter} />
      <NewGame
        findLetterInWord={findLetterInWord}
        gameNotYetStarted={gameNotYetStarted}
      />
      <GameOverWindow gameOver={gameOver} restartGame={restartGame} />

      <Keyboard
        handleClick={handleClick}
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        count={count}
        setCount={setCount}
        word={word}
      />
    </section>
  );
};

export default GameWindow;
