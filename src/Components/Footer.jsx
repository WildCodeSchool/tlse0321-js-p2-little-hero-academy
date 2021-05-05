import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import '../App.css';

const Footer = () => (
  <article className="site-footer">
    <section className="footer-container">
      <article className="footer-quick-links">
        <ul>
          <li>
            <h4>Lien rapide</h4>
          </li>
          <li>
            <Link to={{ pathname: '/' }}>Page d&apos;accueil</Link>
          </li>
          <li>
            <a href="https://github.com/WildCodeSchool/tlse0321-js-p2-little-hero-academy">
              GitHub
            </a>
          </li>
        </ul>
      </article>
    </section>
    <div className="separator">{null}</div>
    <section className="copyrights">
      <p>
        LITTLE HERO ACADEMY. Site crée par les élèves de la Wild Code School de
        Toulouse session mars 2021. Tous droits réservés.
      </p>
    </section>
  </article>
);

export default Footer;
