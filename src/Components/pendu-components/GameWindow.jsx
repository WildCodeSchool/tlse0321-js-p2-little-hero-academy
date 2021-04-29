import { Redirect } from 'react-router-dom';
import Letter from './Letter';
import Keyboard from './Keyboard';
import NewGame from './NewGame';
import './style/GameWindow.css';
import Gamepage from '../Gamepage';
import HartLife from './HartLife';
import PenduImg from './PenduImg';

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
    name: 'Pendu',
    rules:
      "Bienvenue dans le jeu du Sauvetage! Dans ce jeu tu dois trouver le nom d'un hero. Tu a 7 coeur, à chaque erreur tu en perd un. Si tu trouve toutes les lettres du nom du héro, avant d'avoir perdu tout tes coeur, tu gagne . Bonne chance! ",
  };
  return (
    <section className="window-container">
      <Gamepage gameInformation={gameInformation} />
      <PenduImg count={count} />
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
