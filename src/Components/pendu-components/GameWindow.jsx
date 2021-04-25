import { Redirect } from 'react-router-dom';
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
    gameNotYetStarted,
    gameOver,
    gameWin,
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
      <Keyboard
        handleClick={handleClick}
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        count={count}
        setCount={setCount}
        word={word}
      />
      {gameOver && <Redirect to="/gameoverwindow" label="GameOverWindow" />}
      {gameWin && <Redirect to="/gamewinwindow" label="GameWinWindow" />}
    </section>
  );
};

export default GameWindow;
