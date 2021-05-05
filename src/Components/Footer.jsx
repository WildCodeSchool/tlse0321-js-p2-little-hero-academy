import React from 'react';
import '../Styles/Footer.css';
import '../App.css';
import github from '../img/github.png';

const Footer = () => (
  <article className="site-footer">
    {/* <section className="footer-container">
      <article className="footer-quick-links"></article>
    </section> */}
    <div className="separator">{null}</div>
    <section className="copyrights">
      <p>
        LITTLE HERO ACADEMY. Site crée par les élèves de la Wild Code School de
        Toulouse session mars 2021. Tous droits réservés.
      </p>
      <li>
        <a href="https://github.com/WildCodeSchool/tlse0321-js-p2-little-hero-academy">
          <img src={github} alt="acceuil" />
        </a>
      </li>
    </section>
  </article>
);

export default Footer;
