import React from 'react';
import ProfileCard from '../components/ProfileCard';
import StreakTracker from '../components/StreakTracker';

function ProfileDashboard() {
  // Dummy data for demo
  const stats = {
    tasksCompleted: 42,
    currentStreak: 7,
    newMessages: 3,
  };

  const recentActivities = [
    "Completed UI Design course",
    "Posted a new project update",
    "Received positive feedback",
  ];

  return (
    <div className="dashboard">
      <h2>Welcome back, Jane!</h2>

      <div className="stats-container" style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div className="stat-box" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', flex: 1 }}>
          <h3>{stats.tasksCompleted}</h3>
          <p>Tasks Completed</p>
        </div>
        <div className="stat-box" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', flex: 1 }}>
          <h3>{stats.currentStreak} 🔥</h3>
          <p>Current Streak</p>
        </div>
        <div className="stat-box" style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', flex: 1 }}>
          <h3>{stats.newMessages}</h3>
          <p>New Messages</p>
        </div>
      </div>

      <div className="quick-actions" style={{ marginBottom: '20px' }}>
        <button style={{ marginRight: '10px', padding: '10px 15px' }}>Add New Task</button>
        <button style={{ marginRight: '10px', padding: '10px 15px' }}>View Calendar</button>
        <button style={{ padding: '10px 15px' }}>Check Messages</button>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Profile() {
  const profileData = {
    name: "Jane Doe",
    skillsOffered: ["Web Design", "UI/UX"],
    skillsWanted: ["Data Analysis", "AI"]
  };

  return (
    <div>
      <h2>Profile</h2>
      <ProfileDashboard />
      <ProfileCard 
        name={profileData.name} 
        skillsOffered={profileData.skillsOffered}
        skillsWanted={profileData.skillsWanted}
      />
      <StreakTracker />
    </div>
  );
}

export default Profile;
