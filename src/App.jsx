import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ReviewsSection from './components/ReviewsSection';
import PartnersSection from './components/PartnersSection';
import LecturerCard from './components/LecturerCard';
import LecturerModal from './components/LecturerModal';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { lecturersData } from './data/lecturersData';

function App() {
  const [selectedLecturer, setSelectedLecturer] = useState(null);

  return (
    <div className="App">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <PartnersSection />

        <section id="lecturers" className="lecturers-section">
          <h2 className="section-title">Лекторы и лекции</h2>
          <div className="lecturers-grid">
            {lecturersData.map((lecturer) => (
              <LecturerCard
                key={lecturer.id}
                lecturer={lecturer}
                onClick={setSelectedLecturer}
              />
            ))}
          </div>
        </section>
      </main>

      <LecturerModal
        lecturer={selectedLecturer}
        onClose={() => setSelectedLecturer(null)}
      />

      <ReviewsSection />
      <FaqSection />

      <Footer />
    </div>
  );
}

export default App;