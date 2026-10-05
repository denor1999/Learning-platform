import React from 'react';

const statsData = [
  { value: "10+", label: "Лекторов" },
  { value: "1200+", label: "Проведённых занятий" },
  { value: "200+", label: "Довольных клиентов" },
  { value: "4.9", label: "Средний рейтинг" }
];

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">О нас</h2>
      <div className="about-content">
        <p>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами. Мы упрощаем процесс
          подбора, бронирования и организации лекций, помогая находить экспертов,
          которые не просто делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </div>

      <div className="about-stats">
        {statsData.map((stat, index) => (
          <div key={index} className="about-stat-card">
            <div className="about-stat-value">{stat.value}</div>
            <div className="about-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;