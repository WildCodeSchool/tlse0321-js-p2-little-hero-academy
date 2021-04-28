import '../../Styles/Quiz.css';
import GameResult from '../GameResult';
import questions from './questions-data';

const Question = ({
  currentQuestion,
  showScore,
  score,
  handleAnswerOptionClick,
  toggleAnswerClass,
  imgPersonnage,
}) => (
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
          <div className="image-personnage">
            <img src={imgPersonnage} alt="personnage" />
          </div>
          <div className="answer-area">
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
      </div>
    )}
  </div>
);
export default Question;
