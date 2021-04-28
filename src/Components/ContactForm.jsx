import React, { useState } from 'react';
import '../Styles/ContactForm.css';
import axios from 'axios';

const ContactForm = () => {
  const [, setImgContact] = useState('');

  const randomImg = Math.floor(Math.random() * 300) + 1;

  const urlHero = `https://www.superheroapi.com/api.php/10226046072486283/${randomImg}/images`;

  axios
    .get(urlHero)
    .then((results) => results.data)
    .then((data) => {
      setImgContact(data.image.url);
    });

  return (
    <article className="contact-form-container">
      <div className="contact-form-img">
        <img src={urlHero} alt="blabla" />
      </div>
      <form id="contact" method="post">
        <h1 className="h1">Nous contacter</h1>
        <h4>Un retour, une suggestion ou un commentaire ?</h4>
        <input placeholder="Votre nom" type="text" tabIndex="-3" required />
        <input placeholder="Votre Email" type="email" tabIndex="-2" required />
        <textarea placeholder="Votre message ici..." tabIndex="-1" required />
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
  );
};
export default ContactForm;
