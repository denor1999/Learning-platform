import React from 'react';

const LecturerCard = ({ lecturer, onClick }) => {
  return (
    <div className="lecturer-card" onClick={() => onClick(lecturer)}>
      <img src={lecturer.photo} alt={lecturer.name} className="lecturer-photo" />
      <h3>{lecturer.name}</h3>
      <p>{lecturer.degree}</p>
    </div>
  );
};

export default LecturerCard;