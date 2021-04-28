import React, { useState } from 'react';
import '../../Styles/Quiz.css';
import GameResult from '../GameResult';
import questions from './questions-data';

const Question = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowAnswer(true);
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setShowAnswer(false);
      } else {
        setShowScore(true);
      }
    }, 2000);
  };

  const toggleAnswerClass = (isCorrect) => {
    if (showAnswer) {
      return isCorrect ? 'correct' : 'incorrect';
    }
    return '';
  };

  return (
    <div className="question">
      {showScore ? (
        <div className="score-section">
          <div className="score">
            Ton score est {score} sur {questions.length}
          </div>
          <GameResult victory={score > 5} />
        </div>
      ) : (
        <div className="container">
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className={toggleAnswerClass(answerOption.isCorrect)}
                type="button"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Question;
