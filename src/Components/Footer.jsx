import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';
import '../App.css';

const Footer = () => (
  <article className="site-footer">
    <section className="footer-container">
      <article className="footer-credits">
        <ul>
          <li>
            <h4>Crédits</h4>
          </li>
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
      </article>
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
