import React from 'react';
import '../Styles/Footer.css';

const Footer = () => (
  <div className="site-footer">
    <div className="footer-about">
      <h6>A propos</h6>
      <p>
        Notre Little Hero Academy est un site de jeu ludique et intéractif pour
        enfants dans le monde des super-héros de tous les univers regroupés. Ce
        site est mise à jour régulierement afin d&apos;apporter du nouveaux
        contenu.
      </p>
    </div>
    <div className="footer-social-link">
      <h6>Suivez-nous</h6>
      <ul>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </ul>
    </div>
    <div className="footer-quick-links">
      <h6>Lien rapide</h6>
      <ul>
        <li>Notre histoire</li>
        <li>Livre d&apos;Or</li>
        <li>Nous contacter</li>
      </ul>
    </div>
  </div>
);

export default Footer;
