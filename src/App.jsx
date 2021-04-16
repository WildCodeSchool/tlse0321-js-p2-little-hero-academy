import './App.css';
import './Styles/reset.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Gamepage from './Components/Gamepage';

function App() {
  return (
    <div className="App">
      <Header />
      <Gamepage />
      <p>Hello Team</p>
      <Footer />
    </div>
  );
}

export default App;
