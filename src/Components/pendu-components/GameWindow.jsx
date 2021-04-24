import Letter from './Letter';
import Keyboard from './Keyboard';
import NewGame from './NewGame';
import './style/GameWindow.css';

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
    gameStarted,
    setGameStarted,
    startGame,
  } = props;

  return (
    <section className="window-container">
      <h1>Pendu</h1>
      <h1>{count}</h1>
      <Letter showLetter={showLetter} />
      <NewGame
        findLetterInWord={findLetterInWord}
        gameStarted={gameStarted}
        setGameStarted={setGameStarted}
        startGame={startGame}
      />
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
