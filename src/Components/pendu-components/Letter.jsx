import './style/Letter.css';

const Letter = ({ showLetter }) => (
  <section className="find-word">
    <h2 className="find-word-title">Nom du héros à deviner</h2>
    <div className="find-word-box">
      {showLetter.map((letter) => (
        <div className="letter">
          <span className="letter-box">{letter}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Letter;
