import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/Quiz.css';
import Gamepage from './Gamepage';
import Quiz from './quiz-components/Quiz';
import questions from './quiz-components/questions-data';

const QuizGame = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [heroData, setheroData] = useState('');
  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${165}`;
  const gameInformation = {
    name: 'Quiz',
    rules:
      'Bienvenue dans le Quiz! Dans ce jeu tu dois répondre à une serie de 8 questions. Mieux tu réponds aux questions, plus ta note finale sera élevée. Bonne chance! ',
  };
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

  useEffect(() => {
    axios
      .get(urlHero)
      .then((results) => results.data)
      .then((data) => {
        setheroData([
          data.name,
          data.biography['full-name'],
          data.appearance.gender,
          data.biography.alignment,
          data.appearance.race,
          data.biography['place-of-birth'],
          data.biography.publisher,
          data.biography['first-appearance'],
          data.image.url,
        ]);
      });
  }, []);
  function changeQuestions() {
    const newQuestion = [...questions];
    questions[currentQuestion].answerOptions.forEach((answer, index) => {
      if (answer.isCorrect) {
        newQuestion[currentQuestion].answerOptions[index].answerText = heroData[currentQuestion];
        if (heroData[currentQuestion] === 'Female') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Une Femme';
          newQuestion[currentQuestion].answerOptions[index + 1].answerText = 'Un Homme';
        }
        if (heroData[currentQuestion] === 'Male') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Homme';
          newQuestion[currentQuestion].answerOptions[index + 1].answerText = 'Une Femme';
        }
        if (heroData[currentQuestion] === 'bad') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Super Mechant';
          newQuestion[currentQuestion].answerOptions[index + 1].answerText = 'Un Super Hero';
        }
        if (heroData[currentQuestion] === 'good') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Super Hero';
          newQuestion[currentQuestion].answerOptions[index + 1].answerText = 'Un Super Mechant';
        }
      }
    });
  }
  changeQuestions();

  return (
    <div className="game">
      <Gamepage gameInformation={gameInformation} />
      <Quiz
        currentQuestion={currentQuestion}
        showScore={showScore}
        score={score}
        setScore={setScore}
        handleAnswerOptionClick={handleAnswerOptionClick}
        toggleAnswerClass={toggleAnswerClass}
        heroData={heroData}
        questions={questions}
      />
    </div>
  );
};

export default QuizGame;
