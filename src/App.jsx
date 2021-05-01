import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './Styles/reset.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import AboutUs from './Components/AboutUs';
import ContactForm from './Components/ContactForm';
import pendu from './Components/Pendu';
import GameOverWindow from './Components/pendu-components/GameOverWindow';
import GameWinWindow from './Components/pendu-components/GameWinWindow';
import QuizGame from './Components/QuizGame';
import Codex from './Components/Codex';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/jeux" exact component={Carousel} />
        <Route path="/quiz" exact component={QuizGame} />
        <Route path="/pendu" exact component={pendu} />
        <Route path="/codex" exact component={Codex} />
        <Route path="/aboutus" exact component={AboutUs} />
        <Route path="/contactform" exact component={ContactForm} />
        <Route path="/gameoverwindow" exact component={GameOverWindow} />
        <Route path="/gamewinwindow" exact component={GameWinWindow} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
