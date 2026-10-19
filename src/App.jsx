import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LecturersPage from './pages/LecturersPage';
import AboutPage from './pages/AboutPage';
import LecturerDetailPage from './pages/LecturerDetailPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PartnersPage from './pages/PartnersPage';
import ReviewsPage from './pages/ReviewsPage';
import FaqPage from './pages/FaqPage';
import NotFound from './pages/NotFoundPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="lecturers" element={<LecturersPage />} />
        <Route path="lecturers/:id" element={<LecturerDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="how-it-works" element={<HowItWorksPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;