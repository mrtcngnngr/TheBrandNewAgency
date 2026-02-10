import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="contact">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-headline">İletişim</h2>
        </div>

        <div className="about-right">
          <div className="contact-info-grid">
            <div className="contact-column">
              <div className="contact-item">
                <span className="contact-arrow" aria-hidden="true">↘</span>
                <div className="contact-details">
                  <span className="contact-label">Telefon</span>
                  <a href="tel:+905364615797" className="contact-value" aria-label="Telefon numaramız: +90 536 461 57 97">+90 536 461 57 97</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-arrow" aria-hidden="true">↘</span>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <a href="mailto:info@thebrandnew.agency" className="contact-value" aria-label="E-posta adresimiz: info@thebrandnew.agency">info@thebrandnew.agency</a>
                </div>
              </div>
            </div>

            <div className="contact-column">
              <div className="contact-item">
                <span className="contact-arrow" aria-hidden="true">↘</span>
                <div className="contact-details">
                  <span className="contact-label">Adres</span>
                  <span className="contact-value address-value">İstanbul, Türkiye</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

