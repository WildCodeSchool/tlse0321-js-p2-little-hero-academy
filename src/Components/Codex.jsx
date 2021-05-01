import CarteHero from './CarteHero';

const Codex = () => {
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
    238,
    480,
    418,
    644,
    729,
    309,
    308,
    310,
    370,
    423,
    405,
    208,
    514,
    538,
    575,
  ];

  return (
    <div>
      {heros.map((perso) => (
        <CarteHero perso={perso} />
      ))}
    </div>
  );
};

export default Codex;
