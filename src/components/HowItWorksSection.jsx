import React from 'react';

const steps = [
  {
    id: 1,
    title: "Выбираете лектора",
    text: "Изучаете профили, дисциплины и тарифы. Фильтруете по направлению и цене."
  },
  {
    id: 2,
    title: "Бронируете занятие",
    text: "Оставляете заявку на удобную дату. Лектор подтверждает в течение 24 часов."
  },
  {
    id: 3,
    title: "Проводите лекцию",
    text: "Онлайн или офлайн — как удобно. Все материалы предоставляются."
  },
  {
    id: 4,
    title: "Оставляете отзыв",
    text: "Делитесь впечатлениями и помогаете другим выбрать эксперта."
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <h2 className="section-title">Как это работает</h2>
      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.id} className="step-card">
            <div className="step-number">{step.id}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSection;