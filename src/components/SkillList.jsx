import React from 'react';

function SkillList({ skills }) {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index} tabIndex={0} className="skill-item">
          {skill}
        </li>
      ))}
    </ul>
  );
}

export default SkillList;

