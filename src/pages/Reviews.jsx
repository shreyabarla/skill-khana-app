import React, { useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([
    { id: 1, author: 'Alice', rating: 5, comment: 'Great mentor!' },
    { id: 2, author: 'Bob', rating: 4, comment: 'Very helpful sessions.' },
  ]);

  const [formData, setFormData] = useState({
    author: '',
    rating: 5,
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.author.trim() || !formData.comment.trim()) {
      alert('Please fill out all fields.');
      return;
    }
    const newReview = {
      id: Date.now(),
      ...formData,
    };
    setReviews(prev => [newReview, ...prev]);
    setFormData({ author: '', rating: 5, comment: '' });
  };

  return (
    <main className="reviews-page">
      <h2>Reviews</h2>

      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          name="author"
          placeholder="Your name"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <select
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        >
          {[5, 4, 3, 2, 1].map(num => (
            <option key={num} value={num}>{num} Star{num > 1 ? 's' : ''}</option>
          ))}
        </select>
        <textarea
          name="comment"
          placeholder="Write your review here"
          value={formData.comment}
          onChange={handleChange}
          required
          rows={3}
        />
        <button type="submit" className="btn-submit">Submit Review</button>
      </form>

      <section className="reviews-list">
        {reviews.length === 0 ? (
          <p>No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map(({ id, author, rating, comment }) => (
            <div key={id} className="review-card">
              <p><strong>{author}</strong> — {rating} ⭐</p>
              <p>{comment}</p>
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default Reviews;
