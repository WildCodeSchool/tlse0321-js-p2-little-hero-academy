import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => (
  <article className="aboutus">
    <section className="aboutus-intro">
      <h1 className="aboutus-title">A propos de nous</h1>
      <article className="aboutus-description">
        <p>
          Notre mission, que l&apos;on a du accepter malgré nous, était de créer
          une appli en partant d&apos;une base de données API. Nous avons fait
          le choix de l&apos;API des SUPER HERO, tous confondu : marvel, DC,
          star wars..
        </p>
        <p>
          Après réflexion, nous avons pris la direction d&apos;une appli de jeu
          pour enfants dans le thème des héros. Notre choix de jeu s&apos;est
          porté sur des classiques comme le pendu qui sont des jeux accessible à
          tous, notamment pour des enfants.
        </p>
      </article>
    </section>
    <section className="aboutus-cardbloc">
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
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
            <td>67</td>
            <td>43</td>
            <td>72</td>
            <td>99</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>STR</td>
            <td>DEX</td>
            <td>FLEMME</td>
          </tr>
        </table>
      </article>
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
            src="https://thumbs.dreamstime.com/b/superhero-kid-against-blue-sky-background-girl-power-concept-31740105.jpg"
            alt="recette des cookies chocolat"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Charlotte,
            <br /> super chat
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
            <td>67</td>
            <td>43</td>
            <td>72</td>
            <td>99</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>STR</td>
            <td>DEX</td>
            <td>FLEMME</td>
          </tr>
        </table>
      </article>
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
            src="https://thumbs.dreamstime.com/b/superhero-kid-against-blue-sky-background-girl-power-concept-31740105.jpg"
            alt="recette des cookies chocolat"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Simon,
            <br /> super codeur
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
            <td>67</td>
            <td>43</td>
            <td>72</td>
            <td>99</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>STR</td>
            <td>DEX</td>
            <td>FLEMME</td>
          </tr>
        </table>
      </article>
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
            src="https://thumbs.dreamstime.com/b/superhero-kid-against-blue-sky-background-girl-power-concept-31740105.jpg"
            alt="recette des cookies chocolat"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Kevin,
            <br /> super pauseur
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
            <td>67</td>
            <td>43</td>
            <td>72</td>
            <td>99</td>
          </tr>
          <tr>
            <td>INT</td>
            <td>STR</td>
            <td>DEX</td>
            <td>FLEMME</td>
          </tr>
        </table>
      </article>
    </section>
  </article>
);

export default AboutUs;
