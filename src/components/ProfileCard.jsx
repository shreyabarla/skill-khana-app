import React from 'react';
import Badge from './Badge';  // Keep this import
import teamMember from '../assets/photos/team-member.jpeg';
function ProfileCard({ name, skillsOffered, skillsWanted }) {
  return (
    <div className="profile-card">
         <img src={teamMember} alt="Team Member" />
      <h3>{name}</h3>
      <p>Skills Offered:</p>
      <div className="badge-container">
        {skillsOffered.map((skill, i) => (
          <Badge key={i} label={skill} />
        ))}
      </div>
      <p>Skills Wanted:</p>
      <div className="badge-container">
        {skillsWanted.map((skill, i) => (
          <Badge key={i} label={skill} color="#cd00ff" />
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;


