import React from 'react';
import '../Styles/ContactForm.css';

const ContactForm = () => (
  <article className="contact-form-page">
    <div className="contact-form-bg" />

    <article className="contact-form-container">
      <div className="contact-form-img">
        <img
          id="imgcontact"
          src="https://www.superherodb.com/pictures2/portraits/10/100/1112.jpg"
          alt="images"
        />
      </div>
      <form id="contact" method="post">
        <h1 className="h1">Nous contacter</h1>
        <h3>Un retour, une suggestion ou un commentaire ?</h3>
        <input placeholder="Votre nom*" type="text" tabIndex="-3" required />
        <input placeholder="Votre Email*" type="email" tabIndex="-2" required />
        <textarea placeholder="Votre message ici...*" tabIndex="-1" required />
        <button
          name="submit"
          type="submit"
          data-submit="...Sending"
          className="hvr-sweep-to-bottom"
          required
        >
          Envoyer
        </button>
      </form>
    </article>
  </article>
);
export default ContactForm;
