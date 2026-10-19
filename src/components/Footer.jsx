import React from 'react';
import { Link } from 'react-router-dom'

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
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/partners">Партнеры</Link></li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/lecturers">Лекторы</Link></li>
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