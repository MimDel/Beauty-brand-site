import React, { useState } from 'react';
import { addReviewToProduct } from '../utils/addReviews.js';

const Review = ({ productId }) => {
    const [rating, setRating] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError('');
      setSuccess('');
  
      const token = localStorage.getItem('token'); // Get the token from local storage
      const review = { rating, reviewText };
  
      try {
        const response = await addReviewToProduct(productId, review, token);
        setSuccess('Review added successfully!');
        setRating('');
        setReviewText('');
        window.location.reload();
      } catch (error) {
        setError('Error adding review. Please try again.');
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Rating</label>
          <input
            type="number"
            value={rating}
            min={1}
            max={5}
            onChange={(e) => setRating(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Review</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          ></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark">
          Submit Review
        </button>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
      </form>
    );
  };
  
  export default Review;
