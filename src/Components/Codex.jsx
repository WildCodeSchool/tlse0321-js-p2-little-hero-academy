import CarteHero from './CarteHero';
import '../Styles/Codex.css';
import heros from '../data/ListeHero';

const Codex = () => (
  <div className="Codex">
    <div className="Hero-card-container">
      {heros.map((perso) => (
        <CarteHero perso={perso} />
      ))}
    </div>
  </div>
);
export default Codex;
