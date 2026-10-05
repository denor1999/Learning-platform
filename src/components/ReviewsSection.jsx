import React from 'react';

const reviews = [
  {
    id: 1,
    name: "Анна К.",
    role: "HR-директор, IT-компания",
    text: "Заказывали корпоративный тренинг по Python. Лектор подобран за 1 день, все довольны. Планируем ещё.",
    rating: 5
  },
  {
    id: 2,
    name: "Игорь М.",
    role: "Студент, МФТИ",
    text: "Готовился к ЕГЭ по физике с Лебедевым. Сдал на 94 балла. Объясняет сложное простыми словами.",
    rating: 5
  },
  {
    id: 3,
    name: "Елена В.",
    role: "Основатель НКО",
    text: "Искали лектора по психологии для наших волонтёров. Платформа подобрала идеального специалиста.",
    rating: 5
  },
  {
    id: 4,
    name: "Дмитрий С.",
    role: "Product Manager",
    text: "Брал курс по машинному обучению у Козловой. Очень структурированная подача, много практики. Рекомендую.",
    rating: 5
  },
  {
    id: 5,
    name: "Ольга Т.",
    role: "Мама выпускника",
    text: "Сын занимался с Петровым подготовкой к олимпиаде по информатике. Результат превзошёл ожидания!",
    rating: 5
  },
  {
    id: 6,
    name: "Артём Л.",
    role: "Архитектор",
    text: "Консультация с Фёдоровым по проекту помогла избежать серьёзных ошибок. Профессионал своего дела.",
    rating: 4
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="reviews-section">
      <h2 className="section-title">Отзывы</h2>
      <div className="reviews-grid">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-stars">{"★".repeat(review.rating)}</div>
            <p className="review-text">"{review.text}"</p>
            <div className="review-author">
              <strong>{review.name}</strong>
              <span>{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;