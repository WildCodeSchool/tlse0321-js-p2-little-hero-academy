import { useState } from 'react';
// import '../Styles/Pendu.css';
import GameWindow from './pendu-components/GameWindow';

const pendu = () => {
  const word = 'superman';

  const [count, setCount] = useState(0);
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

  //  Recherche si les lettre sont dans le mots a trouver.
  //  Passe la valeur de la key "inword" de la lettre a "true".
  function findLetterInWord() {
    alphabet.forEach((object, index) => {
      const newAlphabet = [...alphabet];
      if (word.includes(newAlphabet[index].letter)) {
        newAlphabet[index].inWord = true;
      } else {
        newAlphabet[index].inWord = false;
      }
      setAlphabet(newAlphabet);
    });
  }

  // Quand tu clique sur la lettre du keyboard la lettre change pour un "_".
  // Passe la valeur de la key show a true si la valeur de la key inword est egale a true.
  // Le compteur de coup s'incrémente de 1 en cliquant .
  function handleClick(index) {
    const newAlphabet = [...alphabet];
    newAlphabet[index].letter = '_';
    if (newAlphabet[index].inWord === true) {
      newAlphabet[index].show = true;
    } else {
      newAlphabet[index].show = false;
    }
    setCount(count + 1);
    setAlphabet(newAlphabet);
  }

  // Le mots a trouver est mis dans un tableau spliter par lettre.
  const letters = word.split('');

  // Remplace toutes les lettre du mots afficher par des "_" pour cacher les lettres.
  const notFoundLetter = letters.map((letter) => letter.replace(letter, '_'));

  // Retourne un tableau d'objet des lettres cliquer qui sont correct.
  const findObject = alphabet.filter(
    (letter) => letter.show && letters.includes(letter.value),
  );

  // Resort du tableau findObject les lettres pour les comparer au mots a trouver
  const findLetter = findObject.map((e) => e.value);
  console.log(findLetter);

  // Copie le tableau de lettre cacher.
  const showLetter = notFoundLetter;

  // remplace chaque lettres du tableau showLetter par sa lettre,
  // si elle correspond a une lettre du tableau letters.
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
      />
    </div>
  );
};

export default pendu;
