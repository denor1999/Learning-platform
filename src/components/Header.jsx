import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <Link to="/how-it-works">Как это работает</Link>
        <Link to="/partners">Партнеры</Link>
        <Link to="/lecturers">Лекторы</Link>
        <Link to="/reviews">Отзывы</Link>
        <Link to="/faq">Вопросы</Link>
      </nav>
    </header>
  );
};

export default Header;