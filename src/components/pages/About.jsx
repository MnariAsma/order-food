import React from 'react';
import './about.css';

function About() {
  return (
  
    <>
   
    <div className="contact-page">
      <h1>Nous contacter</h1>
      <p>Vous pouvez nous joindre via les réseaux sociaux ou par téléphone:</p>
      <ul>
        <li><a href="https://www.instagram.com/moncompte/"><i className="fab fa-instagram"></i> Instagram</a></li>
        <li><a href="https://www.facebook.com/moncompte/"><i className="fab fa-facebook"></i> Facebook</a></li>
        <li><i className="fas fa-phone"></i>Numéro de telephone:+216 52 620 000</li>
        <li><i className="fas fa-map-marker-alt"></i> Adresse: 123 Rue de la Paix, 5000 Monastir</li>
      </ul>
    </div>
    </>
  );
}

export default About;
