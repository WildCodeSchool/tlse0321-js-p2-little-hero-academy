import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../Styles/Quiz.css';
import Gamepage from './Gamepage';
import Quiz from './quiz-components/Quiz';
import questions from './quiz-components/questions-data';

const QuizGame = () => {
  const [character, setCharacter] = useState();

  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${346}`;

  useEffect(() => {
    axios
      .get(urlHero)
      .then((results) => results.data)
      .then((data) => {
        console.log(data);
        setCharacter({
          name: data.name,
          fullName: data.biography['full-name'],
          gender: data.appearance.gender,
          alignment: data.biography.alignment,
          race: data.appearance.race,
          placeOfBirth: data.biography['place-of-birth'],
          publisher: data.biography.publisher,
          firstAppearance: data.biography['first-appearance'],
          image: data.image.url,
        });
      });
  }, []);

  useEffect(() => {
    if (character) {
      const newQuestion = [...questions];
      const keys = Object.keys(character);
      for (let i = 0; i <= 7; i += 1) {
        for (let j = 0; j <= 3; j += 1) {
          if (newQuestion[i].answerOptions[j]?.isCorrect) {
            newQuestion[i].answerOptions[j].answerText = character[keys[i]];
          }
        }
      }
    }
  }, [character]);

  const gameInformation = {
    name: 'Quiz',
    rules:
      'Bienvenue dans le Quiz! Dans ce jeu tu dois répondre à une serie de 8 questions. Mieux tu réponds aux questions, plus ta note finale sera élevée. Bonne chance! ',
  };

  return (
    <div className="game">
      <Gamepage gameInformation={gameInformation} />
      <Quiz />
    </div>
  );
};

export default QuizGame;
