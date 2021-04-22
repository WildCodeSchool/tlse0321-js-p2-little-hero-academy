import React, { useState } from 'react';
import '../Styles/Question.css';

const Question = () => {
  const questions = [
    {
      questionText: 'Qui est ce personnage?',
      answerOptions: [
        { answerText: 'Robin', isCorrect: false },
        { answerText: 'Godzilla', isCorrect: false },
        { answerText: 'Iron-man', isCorrect: true },
        { answerText: 'Harry Potter', isCorrect: false },
      ],
    },
    {
      questionText: 'Quel est le vrai nom de Iron Man?',
      answerOptions: [
        { answerText: 'Bruce Wayne', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: true },
        { answerText: 'Luke Skywalker', isCorrect: false },
        { answerText: 'Peter Parker', isCorrect: false },
      ],
    },
    {
      questionText: 'Iron Man est :',
      answerOptions: [
        { answerText: 'Un homme', isCorrect: true },
        { answerText: 'Une Femme', isCorrect: false },
      ],
    },
    {
      questionText: 'Iron Man est-il: ',
      answerOptions: [
        { answerText: 'Un Super-Héro', isCorrect: true },
        { answerText: 'Un Super-Méchant', isCorrect: false },
      ],
    },
    {
      questionText: 'Notre Super-Héro est:',
      answerOptions: [
        { answerText: 'Un Humain', isCorrect: true },
        { answerText: 'Un Extraterrestre ', isCorrect: false },
        { answerText: 'Un Magicien', isCorrect: false },
        { answerText: 'Un Homme-Poisson', isCorrect: false },
      ],
    },
    {
      questionText: 'Où Iron Man est-il né?',
      answerOptions: [
        { answerText: 'Sur la Lune', isCorrect: false },
        { answerText: 'À Tokyo', isCorrect: false },
        { answerText: 'À Paris', isCorrect: false },
        { answerText: 'À New-York', isCorrect: true },
      ],
    },
    {
      questionText: 'Qui à créé Iron Man?',
      answerOptions: [
        { answerText: 'DC Comics', isCorrect: false },
        { answerText: 'J.K. Rowling', isCorrect: false },
        { answerText: 'Marvel Comics', isCorrect: true },
        { answerText: 'George Lucas', isCorrect: false },
      ],
    },
    {
      questionText: 'Où a-t-on pu voir Iron Man pour la première fois?',
      answerOptions: [
        { answerText: 'Star Wars : Un nouvel espoir', isCorrect: false },
        { answerText: 'X-MEN Vol. 1 #1', isCorrect: false },
        {
          answerText: 'Le Seigneur des anneaux : Les Deux Tours',
          isCorrect: false,
        },
        { answerText: 'Tales of Suspence #39 (March, 1963)', isCorrect: true },
      ],
    },
  ];

  const [showAnswer, setShowAnswer] = useState(0);
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
        setCurrentQuestion(nextQuestion);
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
          You scored {score} out of {questions.length}
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
