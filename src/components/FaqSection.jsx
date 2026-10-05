import React, { useState } from 'react';

const faqData = [
  {
    q: "Как забронировать лектора?",
    a: "Выберите специалиста, нажмите «Найти лектора» и оставьте заявку с удобной датой. Мы свяжемся с вами в течение 24 часов."
  },
  {
    q: "Можно ли провести занятие онлайн?",
    a: "Да, все лекторы проводят занятия как онлайн (Zoom, Google Meet), так и офлайн — по договорённости."
  },
  {
    q: "Что если лектор не подошёл?",
    a: "Мы бесплатно заменим специалиста или вернём предоплату в течение 3 рабочих дней."
  },
  {
    q: "Работаете ли вы с компаниями?",
    a: "Да, мы организуем корпоративные тренинги, интенсивы и курсы для команд от 5 человек."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="section-title">Частые вопросы</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggle(index)}
            >
              {item.q}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">{item.a}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;