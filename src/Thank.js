import React, { useState } from 'react';
import './Thank.css';
function ThankYouPage() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Handle Rating Change
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  // Handle Feedback Change
  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can send the rating and feedback data to your server here
  };

  return (
    <div className="cyberpunk-thank-you">
      <h2>Thank You for Using Our Future Transport Service!</h2>
      <p>We hope you had an amazing ride. Please rate your experience and provide feedback below.</p>

      {/* Star Rating */}
      <div className="star-rating">
      <p>Your Rating:</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <label key={star}>
            <input
              type="radio"
              name="rating"
              value={star}
              checked={star === rating}
              onChange={handleRatingChange}
            />
            ★
          </label>
        ))}
      </div>
    </div>

      {/* Feedback Form */}
      <form onSubmit={handleSubmit}>
       <div className='feedback'>
        <label>Your Feedback:</label>
        <textarea
          rows="4"
          cols="50"
          value={feedback}
          onChange={handleFeedbackChange}
        ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ThankYouPage;
