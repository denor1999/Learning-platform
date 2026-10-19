import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { lecturersData } from '../data/lecturersData';

const LecturerDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const lecturer = lecturersData.find((l) => l.id === Number(id));

  if (!lecturer) {
    return (
      <div className="lecturer-detail-container" style={{ textAlign: 'center' }}>
        <h2>Лектор не найден</h2>
        <button onClick={() => navigate('/lecturers')} className="back-btn" style={{ marginTop: '20px' }}>
          ← Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div className="lecturer-detail-container">
      <button onClick={() => navigate('/lecturers')} className="back-btn">
        ← Назад к списку
      </button>

      <div className="modal-header">
        <img src={lecturer.photo} alt={lecturer.name} className="detail-photo" />
        <div className="modal-info">
          <h2>{lecturer.name}</h2>
          <p><strong>Образование:</strong> {lecturer.education}</p>
          <p><strong>Стаж:</strong> {lecturer.experience}</p>
          <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
        </div>
      </div>

      <div className="detail-content">
        <h3>Преподаваемые дисциплины:</h3>
        {lecturer.disciplines.map((disc, idx) => (
          <div key={idx} className="discipline-block">
            <h4>{disc.title} — {disc.description}</h4>
            <ol>
              {disc.topics.map((topic, tIdx) => (
                <li key={tIdx}>{topic}</li>
              ))}
            </ol>
          </div>
        ))}

        <h3>Тарифы:</h3>
        <ul className="tariffs-list">
          {lecturer.tariffs.map((tariff, idx) => (
            <li key={idx}>{tariff.type}: <strong>{tariff.price}</strong></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LecturerDetailPage;