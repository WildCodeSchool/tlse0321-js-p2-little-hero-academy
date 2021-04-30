import { useState, useEffect } from 'react';
import axios from 'axios';
import GameWindow from './pendu-components/GameWindow';
import diplome from '../img/diploma.png';

const Pendu = () => {
  const heros = [
    38,
    69,
    30,
    346,
    620,
    659,
    149,
    165,
    106,
    213,
    263,
    717,
    720,
    201,
    332,
    238,
    480,
    418,
    644,
    729,
    309,
    308,
    310,
  ];

  function getRandomHero(max) {
    return Math.floor(Math.random() * max);
  }

  const randomIdHero = getRandomHero(22);
  const randomHero = heros[randomIdHero];
  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${randomHero}`;
  const [word, setWord] = useState('superman');

  useEffect(() => {
    axios
      .get(urlHero)
      .then((results) => results.data)
      .then((data) => {
        setWord(data.name.toLowerCase());
      });
  }, []);

  const [count, setCount] = useState(7);
  const [alphabet, setAlphabet] = useState([
    {
      letter: 'a',
      value: 'a',
      inWord: false,
      show: false,
    },
    {
      letter: 'b',
      value: 'b',
      inWord: false,
      show: false,
    },
    {
      letter: 'c',
      value: 'c',
      inWord: false,
      show: false,
    },
    {
      letter: 'd',
      value: 'd',
      inWord: false,
      show: false,
    },
    {
      letter: 'e',
      value: 'e',
      inWord: false,
      show: false,
    },
    {
      letter: 'f',
      value: 'f',
      inWord: false,
      show: false,
    },
    {
      letter: 'g',
      value: 'g',
      inWord: false,
      show: false,
    },
    {
      letter: 'h',
      value: 'h',
      inWord: false,
      show: false,
    },
    {
      letter: 'i',
      value: 'i',
      inWord: false,
      show: false,
    },
    {
      letter: 'j',
      value: 'j',
      inWord: false,
      show: false,
    },
    {
      letter: 'k',
      value: 'k',
      inWord: false,
      show: false,
    },
    {
      letter: 'l',
      value: 'l',
      inWord: false,
      show: false,
    },
    {
      letter: 'm',
      value: 'm',
      inWord: false,
      show: false,
    },
    {
      letter: 'n',
      value: 'n',
      inWord: false,
      show: false,
    },
    {
      letter: 'o',
      value: 'o',
      inWord: false,
      show: false,
    },
    {
      letter: 'p',
      value: 'p',
      inWord: false,
      show: false,
    },
    {
      letter: 'q',
      value: 'q',
      inWord: false,
      show: false,
    },
    {
      letter: 'r',
      value: 'r',
      inWord: false,
      show: false,
    },
    {
      letter: 's',
      value: 's',
      inWord: false,
      show: false,
    },
    {
      letter: 't',
      value: 't',
      inWord: false,
      show: false,
    },
    {
      letter: 'u',
      value: 'u',
      inWord: false,
      show: false,
    },
    {
      letter: 'v',
      value: 'v',
      inWord: false,
      show: false,
    },
    {
      letter: 'w',
      value: 'w',
      inWord: false,
      show: false,
    },
    {
      letter: 'x',
      value: 'x',
      inWord: false,
      show: false,
    },
    {
      letter: 'y',
      value: 'y',
      inWord: false,
      show: false,
    },
    {
      letter: 'z',
      value: 'z',
      inWord: false,
      show: false,
    },
  ]);
  const letters = word.split('');
  const notFoundLetter = letters.map((letter) => letter.replace(letter, '_'));
  const findObject = alphabet.filter(
    (letter) => letter.show && letters.includes(letter.value),
  );
  const findLetter = findObject.map((e) => e.value);
  const showLetter = notFoundLetter;
  const [gameNotYetStarted, setGameNotYetStarted] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [gameWin, setGameWin] = useState(false);
  const hart = diplome;
  const hartFinder = [];
  const showMyHart = () => {
    for (let i = 0; i < count; i += 1) {
      hartFinder.push(hart);
    }
  };
  showMyHart();
  const [lenghtInWord, setLenghtInWord] = useState(100);

  useEffect(() => {
    if (count === 0) {
      setGameOver(true);
    }
  }, [count]);

  useEffect(() => {
    if (
      findLetter.length === word.length
      || findLetter.length === lenghtInWord
    ) {
      setGameWin(true);
    }
  }, [findLetter]);

  const startGame = () => {
    setGameNotYetStarted(false);
  };

  function findLetterInWord() {
    alphabet.forEach((object, index) => {
      const newAlphabet = [...alphabet];
      if (word.includes(newAlphabet[index].letter)) {
        newAlphabet[index].inWord = true;
      } else {
        newAlphabet[index].inWord = false;
      }
      setAlphabet(newAlphabet);
      startGame();
      const inWordArray = alphabet.filter((letter) => letter.inWord === true);
      setLenghtInWord(inWordArray.length);
    });
  }
  function handleClick(index) {
    const newAlphabet = [...alphabet];
    newAlphabet[index].letter = '_';
    if (newAlphabet[index].inWord === true) {
      newAlphabet[index].show = true;
    } else {
      newAlphabet[index].show = false;
      setCount(count - 1);
    }
    setAlphabet(newAlphabet);
  }

  function showMe() {
    for (let i = 0; i < letters.length; i += 1) {
      for (let j = 0; j < findLetter.length; j += 1) {
        if (letters[i] === findLetter[j]) {
          showLetter[i] = findLetter[j];
        }
      }
    }
  }
  showMe();

  return (
    <div id="game">
      <GameWindow
        handleClick={handleClick}
        showLetter={showLetter}
        alphabet={alphabet}
        setAlphabet={setAlphabet}
        count={count}
        setCount={setCount}
        word={word}
        findLetterInWord={findLetterInWord}
        gameNotYetStarted={gameNotYetStarted}
        gameOver={gameOver}
        gameWin={gameWin}
        hartFinder={hartFinder}
      />
    </div>
  );
};

export default Pendu;
