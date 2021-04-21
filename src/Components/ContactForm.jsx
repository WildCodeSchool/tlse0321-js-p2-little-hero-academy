import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => (
  <div className="contact-form-container">
    <form id="contact" method="post">
      <h3>Nous contacter</h3>
      <h4>Un retour, une suggestion ou un commentaire ?</h4>
      <fieldset>
        <input placeholder="Votre nom" type="text" tabIndex="-3" required />
      </fieldset>
      <fieldset>
        <input placeholder="Votre Email" type="email" tabIndex="-2" required />
      </fieldset>
      <fieldset>
        <textarea placeholder="Votre message ici..." tabIndex="-1" required />
      </fieldset>
      <fieldset>
        <button
          name="submit"
          type="submit"
          data-submit="...Sending"
          className="hvr-sweep-to-bottom"
        >
          Envoyer
        </button>
      </fieldset>
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
  </div>
);
export default ContactForm;
