import React from 'react';

function Dashboard() {
  return (
    <main className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to the SkillBarter dashboard.</p>

      <section className="dashboard-stats">
        <div className="stat-card">
          <h3>Skills Offered</h3>
          <p>24</p>
        </div>
        <div className="stat-card">
          <h3>Skills Wanted</h3>
          <p>18</p>
        </div>
        <div className="stat-card">
          <h3>Active Sessions</h3>
          <p>7</p>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

