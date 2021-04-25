import './style/Letter.css';

const Letter = ({ showLetter }) => (
  <section className="find-word">
    {showLetter.map((letter) => (
      <div className="letter">
        <span className="letter-box">{letter}</span>
      </div>
    ))}
  </section>
);

export default Letter;
