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
    <div className="aboutus-cardbloc">
      <div className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="abouts-img"
            src="https://thumbs.dreamstime.com/b/superhero-kid-against-blue-sky-background-girl-power-concept-31740105.jpg"
            alt="recette des cookies chocolat"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Jerome,
            <br /> super dormeur
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Il a la capacité de dormir plus de 10h
          d&apos;affilées à moins qu&apos;on ne le reveille. Et en plus, il
          n&apos;est pas du tout du matin ! Il est super, c&apos;est un héro,
          c&apos;est un super hero !!
        </div>
        <table className="aboutus-stats">
          <tr>
            <td>
              <i className="fas fa-stopwatch" />
              &ensp;37 Force
            </td>
            <td className="stats-separator">
              <i className="fas fa-square" />
            </td>
            <td>
              <i className="fas fa-utensils" />
              &ensp;67 inteligence
            </td>
            <td className="stats-separator">
              <i className="fas fa-square" />
            </td>
            <td>
              <i className="fas fa-coins" />
              &ensp;66 rapiditié
            </td>
            <td>
              <i className="fas fa-coins" />
              &ensp;84 flemme
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
);

export default AboutUs;
