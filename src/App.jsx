import './App.css';
import './Styles/reset.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <p>Hello Team</p>
      <Footer />
    </div>
  );
}

export default App;
