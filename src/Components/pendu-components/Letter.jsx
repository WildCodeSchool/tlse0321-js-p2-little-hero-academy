const Letter = ({ showLetter }) => (
  <section className="find-word">
    {showLetter.map((letter) => (
      <div className="letter">
        <h1>{letter}</h1>
      </div>
    ))}
  </section>
);

export default Letter;
