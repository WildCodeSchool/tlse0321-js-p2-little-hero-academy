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
        <div className="aboutus-stats">
          <div className="stats">
            <div>STR</div>
            <div>33</div>
          </div>
          <div className="stats">
            <div>INT</div>
            <div>65</div>
          </div>
          <div className="stats">
            <div>DEX</div>
            <div>51</div>
          </div>
          <div className="stats">
            <div>FATIGUE</div>
            <div>96</div>
          </div>
        </div>
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
            <br /> super Heroine
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Il a la capacité de dormir plus de 10h
          d&apos;affilées à moins qu&apos;on ne le reveille. Et en plus, il
          n&apos;est pas du tout du matin ! Il est super, c&apos;est un héro,
          c&apos;est un super hero !!
        </div>
        <div className="aboutus-stats">
          <div className="stats">
            <div>STR</div>
            <div>23</div>
          </div>
          <div className="stats">
            <div>INT</div>
            <div>66</div>
          </div>
          <div className="stats">
            <div>DEX</div>
            <div>51</div>
          </div>
          <div className="stats">
            <div>STATS</div>
            <div>##</div>
          </div>
        </div>
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
            Kévin,
            <br /> super hero
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Il a la capacité de dormir plus de 10h
          d&apos;affilées à moins qu&apos;on ne le reveille. Et en plus, il
          n&apos;est pas du tout du matin ! Il est super, c&apos;est un héro,
          c&apos;est un super hero !!
        </div>
        <div className="aboutus-stats">
          <div className="stats">
            <div>STR</div>
            <div>67</div>
          </div>
          <div className="stats">
            <div>INT</div>
            <div>66</div>
          </div>
          <div className="stats">
            <div>DEX</div>
            <div>33</div>
          </div>
          <div className="stats">
            <div>STR</div>
            <div>33</div>
          </div>
        </div>
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
        <div className="aboutus-stats">
          <div className="stats">
            <div>STR</div>
            <div>33</div>
          </div>
          <div className="stats">
            <div>STR</div>
            <div>33</div>
          </div>
          <div className="stats">
            <div>STR</div>
            <div>33</div>
          </div>
          <div className="stats">
            <div>STR</div>
            <div>33</div>
          </div>
        </div>
      </article>
    </section>
  </article>
);

export default AboutUs;
