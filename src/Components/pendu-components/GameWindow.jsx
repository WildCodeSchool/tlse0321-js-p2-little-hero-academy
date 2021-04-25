import Letter from './Letter';
import Keyboard from './Keyboard';
import NewGame from './NewGame';
import './style/GameWindow.css';
import Gamepage from '../Gamepage';

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
  } = props;

  return (
    <section className="window-container">
      <Gamepage />
      <h1>Pendu</h1>
      <h1>{count}</h1>
      <Letter showLetter={showLetter} />
      <NewGame findLetterInWord={findLetterInWord} />
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
