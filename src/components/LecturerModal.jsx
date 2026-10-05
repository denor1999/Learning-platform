import React from 'react';

const LecturerModal = ({ lecturer, onClose }) => {
  if (!lecturer) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className="modal-header">
          <img src={lecturer.photo} alt={lecturer.name} />
          <div>
            <h2>{lecturer.name}</h2>
            <p><strong>Образование:</strong> {lecturer.education}</p>
            <p><strong>Стаж:</strong> {lecturer.experience}</p>
            <p><strong>Учёная степень:</strong> {lecturer.degree}</p>
          </div>
        </div>

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

export default LecturerModal;