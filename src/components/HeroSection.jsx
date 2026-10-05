import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Картинка лектора. Замени ссылку на свою или локальную из assets */}
        <img
          src="https://lh3.googleusercontent.com/d/12Sjk-QkLBTIIBHhn3XcpxoZCFBkAHAaE"
          alt="Лектор ведет занятие"
          className="hero-image"
        />
        <div className="hero-text-content">
          <h2>Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.</h2>
          <a href="#lecturers" className="hero-btn">НАЙТИ ЛЕКТОРА</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;