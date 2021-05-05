import '../../Styles/Quiz.css';
import GameResult from '../GameResult';

const Question = ({
  currentQuestion,
  showScore,
  score,
  handleAnswerOptionClick,
  toggleAnswerClass,
  heroData,
  questions,
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
            <span>
              Question {currentQuestion + 1}/{questions.length} :
            </span>
          </div>
          <div className="question-text">
            {questions[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          <div className="image-personnage">
            <img src={heroData[heroData.length - 1]} alt="personnage" />
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
