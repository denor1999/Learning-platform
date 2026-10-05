import React, { useEffect, useRef, useState } from 'react';

// Заглушка — SVG-картинка, вшитая прямо в код.
// Показывается вместо фото, пока карточка не попала в экран.
const PLACEHOLDER =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
       <rect width="100%" height="100%" fill="#e5e7eb"/>
       <text x="50%" y="50%" font-family="sans-serif" font-size="18"
             fill="#9ca3af" text-anchor="middle" dominant-baseline="middle">
         Загрузка…
       </text>
     </svg>`
  );

const LecturerCard = ({ lecturer, onClick }) => {
  // Ссылка на <div> карточки — за ним будет следить наблюдатель
  const cardRef = useRef(null);

  // "Карточка уже видна на экране?" — управляет подстановкой фото или заглушки
  const [isVisible, setIsVisible] = useState(false);

  // "Фото скачалось?" — управляет плавным появлением
  const [isLoaded, setIsLoaded] = useState(false);

  // Создаём наблюдателя один раз после появления карточки
  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    // Fallback для старых браузеров
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);           // триггерим загрузку фото
            observer.unobserve(entry.target); // отписываемся от этой карточки
          }
        });
      },
      {
        rootMargin: '100px', // начать грузить за 100px до появления
        threshold: 0.1,      // достаточно 10% карточки
      }
    );

    observer.observe(node);

    // ТРЕБОВАНИЕ ЗАДАНИЯ: отписка при размонтировании
    return () => {
      observer.disconnect();
    };
  }, []);

  // Сбрасываем флаг загрузки при смене видимости
  useEffect(() => {
    setIsLoaded(false);
  }, [isVisible]);

  return (
    <div
      ref={cardRef}
      className="lecturer-card"
      onClick={() => onClick(lecturer)}
    >
      <img
        src={isVisible ? lecturer.photo : PLACEHOLDER}
        alt={lecturer.name}
        className={
          'lecturer-photo' + (isLoaded ? ' lecturer-photo--loaded' : '')
        }
        onLoad={() => setIsLoaded(true)}
      />
      <h3>{lecturer.name}</h3>
      <p>{lecturer.degree}</p>
    </div>
  );
};

export default LecturerCard;