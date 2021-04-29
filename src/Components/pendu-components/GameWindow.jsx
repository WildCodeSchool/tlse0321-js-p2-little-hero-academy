import { Redirect } from 'react-router-dom';
import Letter from './Letter';
import Keyboard from './Keyboard';
import NewGame from './NewGame';
import './style/GameWindow.css';
import Gamepage from '../Gamepage';
import HartLife from './HartLife';

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
    hartFinder,
  } = props;
  const gameInformation = {
    name: 'Sauvetage',
    rules:
      "Bienvenue dans le jeu du Sauvetage! Ta mission: retrouver le nom d'un Super-Hero en cliquant sur les lettres ci-dessous. Si tu trouves le nom de notre héro avant que les coeurs aient disparu, tu gagnes. Bonne chance! ",
  };
  return (
    <section className="window-container">
      <Gamepage gameInformation={gameInformation} />
      <Letter showLetter={showLetter} />
      <HartLife hartFinder={hartFinder} />
      <Keyboard
        handleClick={handleClick}
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        count={count}
        setCount={setCount}
        word={word}
      />
      <NewGame
        findLetterInWord={findLetterInWord}
        gameNotYetStarted={gameNotYetStarted}
      />
      {gameOver && <Redirect to="/gameoverwindow" label="GameOverWindow" />}
      {gameWin && (
        <Redirect to="/gamewinwindow" word={word} label="GameWinWindow" />
      )}
    </section>
  );
};

export default GameWindow;
