import React from 'react';
import '../Styles/Footer.css';
import '../App.css';

const Footer = () => (
  <div className="site-footer">
    <div className="footer-container">
      <div className="footer-about">
        <h6>Crédits</h6>
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
              www.freepik.com
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
            Avatar cartoon fait sur{' '}
            <a
              href="https://superherotar.framiq.com/fr/"
              className="href-footer"
            >
              Superherotar
            </a>{' '}
          </li>
        </ul>
      </div>
      <div className="footer-social-link">
        <h6>Suivez-nous</h6>
        <ul>
          <li>
            <a href="www.facebook.com" className="href-footer">
              Facebook
            </a>
          </li>
          <li>
            <a href="wwww.twitter.com" className="href-footer">
              Twitter
            </a>
          </li>
          <li>
            <a href="wwww.instragram.com" className="href-footer">
              Instragral
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-quick-links">
        <h6>Lien rapide</h6>
        <ul>
          <li>Notre histoire</li>
          <li>Livre d&apos;Or</li>
          <li>Nous contacter</li>
          <li>Plan du site</li>
        </ul>
      </div>
    </div>
    <div className="separator">{null}</div>
    <div className="footer-credits">
      <div className="copyrights">
        <p>
          LITTLE HERO ACADEMY. Site crée par les élèves de la Wild Code School
          de Toulouse session mars 2021. Aucun droits réservés.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
