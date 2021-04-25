import React from 'react';
import '../Styles/Quiz.css';
import Gamepage from './Gamepage';
import Quiz from './quiz-components/Quiz';

const QuizGame = () => (
  <div className="game">
    <Gamepage />
    <Quiz />
  </div>
);

export default QuizGame;
