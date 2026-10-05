import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h4>Учебная платформа</h4>
          <p>
            Соединяем компании, образовательные учреждения и НКО
            с лучшими лекторами и экспертами. Помогаем находить знания,
            которые вдохновляют.
          </p>
        </div>

        <div className="footer-column">
          <h4>Навигация</h4>
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#partners">Партнеры</a></li>
            <li><a href="#about">О нас</a></li>
            <li><a href="#lecturers">Лекторы</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Контакты</h4>
          <ul>
            <li>Email: info@lecture-platform.ru</li>
            <li>Телефон: +7 (999) 123-45-67</li>
            <li>Адрес: г. Москва, ул. Образцовая, д. 10</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Учебная платформа. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;