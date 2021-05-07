import React from 'react';
import '../Styles/Carousel.css';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';

const Carousel = () => (
  <div className="carousel">
    <div className="headerCarousel">
      <h1>Choisis ton jeux</h1>
    </div>
    <div className="carouselWindow">
      <AliceCarousel
        className="carouselBox"
        duration={600}
        autoPlay
        infinite
        startIndex={1}
        fadeOutAnimation
        mouseDragEnabled
        playButtonEnabled
        autoPlayInterval={5000}
      >
        <Link to="/quiz" label="Quiz">
          <img
            src="https://images.unsplash.com/photo-1572541859037-2d4c68076e12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80"
            className="yours-custom-class"
            alt="img"
          />
          <div className="centred">
            <h1>Quiz</h1>
          </div>
        </Link>
        <Link to="/pendu" label="Pendu">
          <img
            src="https://cdn.pixabay.com/photo/2019/06/27/19/34/boy-4302994_960_720.jpg"
            className="yours-custom-class"
            alt="img"
          />
          <div className="centred">
            <h1>Sauvetage</h1>
          </div>
        </Link>
        <Link to="/codex" label="Codex">
          <img
            src="https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            className="yours-custom-class"
            alt="img"
          />
          <div className="centred">
            <h1>Codex</h1>
          </div>
        </Link>
      </AliceCarousel>
    </div>
  </div>
);

export default Carousel;
