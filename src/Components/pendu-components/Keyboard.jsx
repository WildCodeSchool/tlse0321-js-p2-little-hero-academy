const Keyboard = (props) => {
  const { alphabet, handleClick } = props;

  return (
    <section className="keyboard-container">
      {alphabet.map((letter, index) => (
        <button type="button" onClick={() => handleClick(index)}>
          {letter.letter}
        </button>
      ))}
    </section>
  );
};

export default Keyboard;
