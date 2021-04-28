import '../../Styles/Quiz.css';
import GameResult from '../GameResult';

const Question = ({
  currentQuestion,
  showScore,
  score,
  handleAnswerOptionClick,
  toggleAnswerClass,
  heroData,
  modifyQuestion,
}) => (
  <div className="question">
    {showScore ? (
      <div className="score-section">
        <div className="score">
          Ton score est {score} sur {modifyQuestion.length}
        </div>
        <GameResult victory={score > 5} />
      </div>
    ) : (
      <div className="container">
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{modifyQuestion.length}
          </div>
          <div className="question-text">
            {modifyQuestion[currentQuestion].questionText}
          </div>
        </div>
        <div className="answer-section">
          <div className="image-personnage">
            <img src={heroData[heroData.length - 1]} alt="personnage" />
          </div>
          <div className="answer-area">
            {modifyQuestion[currentQuestion].answerOptions.map(
              (answerOption) => (
                <button
                  onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  className={toggleAnswerClass(answerOption.isCorrect)}
                  type="button"
                >
                  {answerOption.answerText}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    )}
  </div>
);
export default Question;
