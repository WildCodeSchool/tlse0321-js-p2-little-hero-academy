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
    name: 'Sauvetage',
    rules:
      'Bienvenue dans le jeu du Sauvetage! Ta mission consiste à trouver le nom de notre héros. Si tu y arrives avant que les diplômes aient disparu, tu auras gagné. Bonne chance !',
  };
  return (
    <article className="window-container">
      <Gamepage gameInformation={gameInformation} />
      <section className="pendugame-container">
        <article className="pendugame-info">
          <Letter showLetter={showLetter} />{' '}
          <HartLife hartFinder={hartFinder} />
        </article>
        <article className="pendugame-container2">
          <PenduImg count={count} />
          <Keyboard
            handleClick={handleClick}
            alphabet={alphabet}
            setAlphabet={setAlphabet}
            count={count}
            setCount={setCount}
            word={word}
          />
        </article>
        <NewGame
          findLetterInWord={findLetterInWord}
          gameNotYetStarted={gameNotYetStarted}
        />
        {gameOver && <Redirect to="/gameoverwindow" label="GameOverWindow" />}
        {gameWin && (
          <Redirect to="/gamewinwindow" word={word} label="GameWinWindow" />
        )}
      </section>
    </article>
  );
};

export default GameWindow;
