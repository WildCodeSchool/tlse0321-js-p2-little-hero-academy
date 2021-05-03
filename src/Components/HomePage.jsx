import { Route } from 'react-router-dom';
import '../Styles/HomePage.css';
import imgAcademy from '../img/academyheros.png';

const homePage = () => (
  <div className="homePresentation">
    <div className="homeText">
      <p>BIENVENUE À LA</p>
      <p>LITTLE HERO ACADEMY</p>
    </div>
    <img className="imgAcademy" src={imgAcademy} alt="academy" />
    <Route
      render={({ history }) => (
        <button
          className="homeButton"
          type="button"
          onClick={() => {
            history.push('/jeux');
          }}
        >
          <text className="homeTextButton">ENTRER DANS L&apos;ACADEMIE</text>
        </button>
      )}
    />
  </div>
);

export default homePage;
