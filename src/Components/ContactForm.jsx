import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => (
  <article className="contact-form-container">
    <form id="contact" method="post">
      <h3>Nous contacter</h3>
      <h4>Un retour, une suggestion ou un commentaire ?</h4>
      <input placeholder="Votre nom" type="text" tabIndex="-3" required />
      <input placeholder="Votre Email" type="email" tabIndex="-2" required />
      <textarea placeholder="Votre message ici..." tabIndex="-1" required />
      <button
        name="submit"
        type="submit"
        data-submit="...Sending"
        className="hvr-sweep-to-bottom"
      >
        Envoyer
      </button>
      <p className="copyright">
        Designed by{' '}
        <a
          href="https://colorlib.com"
          target="_blank"
          title="Colorlib"
          rel="noreferrer"
        >
          Colorlib
        </a>
      </p>
    </form>
  </article>
);
export default ContactForm;
