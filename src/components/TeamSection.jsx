import React from 'react';

const team = [
  { name: "Алексей Смирнов", role: "Основатель платформы" },
  { name: "Екатерина Иванова", role: "Директор по развитию" },
  { name: "Михаил Петров", role: "Технический директор" },
  { name: "Ольга Кузнецова", role: "Менеджер по работе с лекторами" }
];

const TeamSection = () => {
  return (
    <section className="team-section">
      <h2 className="section-title">Наша команда</h2>
      <div className="team-grid">
        {team.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-photo-placeholder">
              <span>👤</span>
            </div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


export default TeamSection;