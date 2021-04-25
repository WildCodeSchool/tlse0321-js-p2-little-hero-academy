import React from 'react';
import '../Styles/Quiz.css';
import Gamepage from './Gamepage';
import Quiz from './quiz-components/Quiz';

const QuizGame = () => {
  const gameInformation = {
    name: 'Quiz',
    rules:
      'Bienvenue dans le Quiz! Dans ce jeu tu dois répondre à une serie de 10 questions. Mieux tu réponds aux questions, plus ta note finale sera élevée. Bonne chance! ',
  };
  return (
    <div className="game">
      <Gamepage gameInformation={gameInformation} />
      <Quiz />
    </div>
  );
};

export default QuizGame;
