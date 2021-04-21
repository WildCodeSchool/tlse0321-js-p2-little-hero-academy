import './App.css';
import './Styles/reset.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import Game from './Components/Game';
import Gamepage from './Components/Gamepage';


function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      {/* <Game /> */}
      <Gamepage />
      <p>Hello Team</p>
      <Game />
      <Footer />
    </div>
  );
}

export default App;
