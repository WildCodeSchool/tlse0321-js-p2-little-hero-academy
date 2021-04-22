import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './Styles/reset.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gamepage from './Components/Gamepage';
import Carousel from './Components/Carousel';
import ContactForm from './Components/ContactForm';
import pendu from './Components/Pendu';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/jeux" exact component={Carousel} />
        <Route path="/quiz" exact component={Gamepage} />
        <Route path="/contactform" exact component={ContactForm} />
        <Route path="/pendu" exact component={pendu} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
