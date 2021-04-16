import React from 'react';
import '../Styles/Quiz.css';
import Question from './Question';

const Game = () => (
  <div className="game">
    <h1 className="game-title">Game title</h1>
    <Question />
  </div>
);

export default Game;
