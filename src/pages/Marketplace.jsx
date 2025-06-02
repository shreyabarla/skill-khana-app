import React from 'react';

function Marketplace() {
  // Placeholder skills - replace with real data later
  const skills = [
    'React',
    'Python',
    'UI/UX Design',
    'Project Management',
    'Data Science',
    'Video Editing',
  ];

  return (
    <main className="marketplace">
      <h2>Marketplace</h2>
      <p>Find and request skills here.</p>

      <section className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </section>
    </main>
  );
}

export default Marketplace;

