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
  const [modifyQuestion, setModifyQuestion] = useState([...questions]);
  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${346}`;
  console.log(setModifyQuestion);
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

  //  ******************************** */

  useEffect(() => {
    axios
      .get(urlHero)
      .then((results) => results.data)
      .then((data) => {
        setheroData(
          { img: data.image.url },
          { name: data.name },
          { fullName: data.biography['full.name'] },
          { gender: data.appearance.gender },
          { alignment: data.biography.alignment },
          { race: data.biography.race },
          { placeOfBirth: data.biography['place-of-birth'] },
          { publisher: data.biography.publisher },
          { FirstAppearance: data.biography['first-appearance'] },
        );
      });
  }, [Quiz]);
  console.log(heroData.img);

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
        modifyQuestion={modifyQuestion}
      />
    </div>
  );
};

export default QuizGame;
