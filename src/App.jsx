import './App.css';
import './Styles/reset.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Hello Team</p>
      <Game />
      <Footer />
    </div>
  );
}

export default App;
