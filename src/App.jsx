import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Quiz from './Components/Game';

function App() {
  return (
    <div className="App">
      <Header />
      <p>Hello Team</p>
      <Quiz />
      <Footer />
    </div>
  );
}

export default App;
