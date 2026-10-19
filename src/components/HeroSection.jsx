import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <img
          src="https://lh3.googleusercontent.com/d/12Sjk-QkLBTIIBHhn3XcpxoZCFBkAHAaE"
          alt="Лектор ведет занятие"
          className="hero-image"
        />
        <div className="hero-text-content">
          <h2>Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h2>
          <Link to="/lecturers" className="hero-btn">НАЙТИ ЛЕКТОРА</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;