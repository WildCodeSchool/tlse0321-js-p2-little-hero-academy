import React from 'react';
import '../Styles/Quiz.css';
import QuestResp from './QuestResp';

const Game = () => (
  <div className="game">
    <h1 className="game-title">Game title</h1>
    <QuestResp />
  </div>
);

export default Game;