import React, { useEffect, useState } from 'react';

function StreakTracker() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    const storedStreak = localStorage.getItem('streak');
    const storedDate = localStorage.getItem('lastLogin');

    const today = new Date().toDateString();

    if (storedDate) {
      const lastDate = new Date(storedDate);
      const diffTime = new Date(today) - lastDate;
      const diffDays = diffTime / (1000 * 60 * 60 * 24);

      if (diffDays === 1) {
        const newStreak = parseInt(storedStreak) + 1;
        setStreak(newStreak);
        localStorage.setItem('streak', newStreak);
      } else if (diffDays > 1) {
        setStreak(1);
        localStorage.setItem('streak', 1);
      } else {
        setStreak(parseInt(storedStreak));
      }
    } else {
      setStreak(1);
      localStorage.setItem('streak', 1);
    }

    localStorage.setItem('lastLogin', today);
  }, []);

  return (
    <div className="streak-box">
      🔥 <strong>Streak:</strong> {streak} day{streak !== 1 ? 's' : ''}
    </div>
  );
}

export default StreakTracker;

