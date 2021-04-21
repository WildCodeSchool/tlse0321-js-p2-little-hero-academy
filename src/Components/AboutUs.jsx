import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => (
  <div className="aboutus">
    <div className="aboutus-intro">
      <h1 className="aboutus-title">A propos de nous</h1>
      <p>
        Texte explicatif et sympathique sur la raison pour laquelle on a fait
        cette appli, ce que lon a aimé pas aimé ..
      </p>
    </div>
    <div className="aboutus-grid-container">
      <div className="aboutus-grid-img" />
      <div className="aboutus-grid-text">
        An About Us page helps your company make a good first impression, and is
        critical for building customer trust and loyalty. An About Us page
        should make sure to cover basic information about the store and its
        founders, explain the company
      </div>
      <div className="aboutus-grid-img">image</div>
      <div className="aboutus-grid-text">texte</div>
      <div className="aboutus-grid-img">image</div>
      <div className="aboutus-grid-text">texte</div>
    </div>
  </div>
);

export default AboutUs;
