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
  const gameInformation = {
    name: 'Quiz',
    rules:
      'Bienvenue dans le Quiz! Dans ce jeu tu dois répondre à une serie de 8 questions. Mieux tu réponds aux questions, plus ta note finale sera élevée. Bonne chance! ',
  };

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
    418,
    644,
    423,
    208,
    538,
  ];
  console.log(heros);

  function getRandomHero(max) {
    return Math.floor(Math.random() * max);
  }
  const heroNumber = heros.length - 1;
  const randomIdHero = getRandomHero(heroNumber);
  const randomHero = heros[randomIdHero];
  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${randomHero}`;

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
        if (heroData[currentQuestion] === 'Human') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Humain';
        }
        if (heroData[currentQuestion] === 'Atlantean') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Atlantes';
        }
        if (heroData[currentQuestion] === 'Asgardian') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Asgardien';
        }
        if (heroData[currentQuestion] === 'neutral') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Neutre';
        }
        if (heroData[currentQuestion] === 'Amazon') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Une Amazone';
        }
        if (heroData[currentQuestion] === 'Human / Radiation') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Humain';
        }
        if (heroData[currentQuestion] === 'Kryptonian') {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Un Kryptonien';
        }
        if (
          heroData[currentQuestion]
          === 'Unrevealed, probably somewhere in Northern Europe'
        ) {
          newQuestion[currentQuestion].answerOptions[index].answerText = 'Nuremberg';
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
