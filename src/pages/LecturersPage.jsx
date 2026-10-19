import React from 'react';
import { Link } from 'react-router-dom';
import { lecturersData } from '../data/lecturersData';
import LecturerCard from '../components/LecturerCard';

const LecturersPage = () => {
  return (
    <section className="lecturers-section">
      <h2 className="section-title">Лекторы и лекции</h2>
      <div className="lecturers-grid">
        {lecturersData.map((lecturer) => (
          <Link
            to={`/lecturers/${lecturer.id}`}
            key={lecturer.id}
            className="lecturer-link"
          >
            <LecturerCard lecturer={lecturer} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default LecturersPage;