import React, { useState } from 'react';

function BookSession() {
  const [formData, setFormData] = useState({
    mentor: '',
    date: '',
    time: '',
    topic: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Session booked with ${formData.mentor} on ${formData.date} at ${formData.time} about "${formData.topic}"`);
    // Here you’d add API call to save session booking
  };

  return (
    <main className="book-session">
      <h2>Book a Session</h2>
      <form onSubmit={handleSubmit} className="book-session-form">
        <label>
          Mentor Name:
          <input
            type="text"
            name="mentor"
            value={formData.mentor}
            onChange={handleChange}
            required
            placeholder="Enter mentor's name"
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Topic:
          <input
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
            placeholder="What will you learn?"
          />
        </label>
        <button type="submit" className="btn-submit">Book Session</button>
      </form>
    </main>
  );
}

export default BookSession;

