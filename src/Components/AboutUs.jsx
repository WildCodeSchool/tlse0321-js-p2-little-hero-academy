import React from 'react';
import '../Styles/AboutUs.css';

const AboutUs = () => (
  <article className="aboutus">
    <section className="aboutus-intro">
      <h1 className="aboutus-title">A propos de nous</h1>
      <article className="aboutus-description">
        <p>
          Notre mission était de créer une appli en partant d&apos;une base de
          données API. Nous avons fait le choix de l&apos;API des SUPER HEROS,
          tous confondus : marvel, DC, star wars..
        </p>
        <p>
          Après réflexion, nous avons pris la direction d&apos;une appli de jeu
          pour enfants dans le thème des héros. Notre choix de jeu s&apos;est
          porté sur des classiques comme le pendu qui sont des jeux accessibles
          à tous, notamment pour des enfants.
        </p>
      </article>
    </section>
    <section className="aboutus-cardbloc">
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
            src="https://thumbs.dreamstime.com/b/superhero-kid-against-blue-sky-background-girl-power-concept-31740105.jpg"
            alt="personal-card"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Jerome,
            <br /> Super Héros
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Il a la capacité de dormir plus de 10h
          d&apos;affilée à moins qu&apos;on ne le réveille. Et en plus, il
          n&apos;est pas du tout du matin ! Il est super, c&apos;est un héros,
          c&apos;est un super héros !!
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
            alt="personal-card"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Charlotte,
            <br /> Super Héroine
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Elle a la capacité de se déplacer d&apos;un
          point à l&apos;autre presque plus vite que la lumière ! Elle est
          super, c&apos;est une héroïne, c&apos;est une super héroïne !!
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
            <div>89</div>
          </div>
          <div className="stats">
            <div>VITESSE</div>
            <div>30</div>
          </div>
        </div>
      </article>
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-img-container">
          <img
            className="aboutus-img"
            src="https://thumbs.dreamstime.com/b/superhero-kid-against-blue-sky-background-girl-power-concept-31740105.jpg"
            alt="personal-card"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Kevin,
            <br /> Super Héros
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Il a la capacité de dormir plus de 10h
          d&apos;affilée à moins qu&apos;on ne le réveille. Et en plus, il
          n&apos;est pas du tout du matin ! Il est super, c&apos;est un héros,
          c&apos;est un super héros !
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
            alt="personal-card"
          />
        </div>
        <div className="aboutus-card-title">
          <h2>
            Simon,
            <br /> Super Héros
          </h2>
        </div>
        <div className="aboutus-card-text">
          Son pouvoir est immense ! Il a la capacité de coder plus vite que son
          ombre ! Il est super, c&apos;est un héros , c&apos;est un super héros
          !
        </div>
        <div className="aboutus-stats">
          <div className="stats">
            <div>STR</div>
            <div>80</div>
          </div>
          <div className="stats">
            <div>INT</div>
            <div>100</div>
          </div>
          <div className="stats">
            <div>DEX</div>
            <div>60</div>
          </div>
          <div className="stats">
            <div>Réflection</div>
            <div>100</div>
          </div>
        </div>
      </article>
      {/* *************************************************************** */}
      <article className="aboutus-card" href="recettespages/recette-page.html">
        <div className="aboutus-card-title">
          <h2>Crédits</h2>
        </div>
        <div className="aboutus-card-text">
          Ils nous ont aidée à réaliser notre site, nous avons utilisé leur
          magnifique travail pour embellir le notre.
          <br />
          Nous les remercions ce sont aussi des super-héros , nos super-héros!!
        </div>
        <div className="credit">
          <ul>
            <li>
              Vecteurs par{' '}
              <a
                href="https://waww.vecteezy.com/free-vector/cartoon"
                className="href-footer"
              >
                Vecteezy
              </a>{' '}
              et{' '}
              <a
                href="https://www.freepik.com/vectors/background"
                className="href-footer"
              >
                Freepik
              </a>
            </li>
            <li>
              Typographie{' '}
              <a href="https://fonts.google.com/" className="href-footer">
                GoogleFonts
              </a>{' '}
              et{' '}
              <a href="https://www.dafont.com/" className="href-footer">
                Dafont
              </a>
            </li>
            <li>
              Avatar cartoon{' '}
              <a
                href="https://superherotar.framiq.com/fr/"
                className="href-footer"
              >
                Superherotar
              </a>{' '}
            </li>
          </ul>
        </div>
      </article>
    </section>
  </article>
);

export default AboutUs;
