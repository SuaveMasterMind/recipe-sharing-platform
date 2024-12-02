import React from 'react';

const RatingReview = ({ rating, onRatingChange }) => {
  return (
    <div>
      <label>
        Rating:
        <select value={rating} onChange={e => onRatingChange(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
    </div>
  );
};

export default RatingReview;