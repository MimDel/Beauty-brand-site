import React from 'react';
import { useProductReviews } from '../utils/getReview';
import { CgProfile } from "react-icons/cg";

const ReviewCreated = ({ productId }) => {
  const { data: reviews, isLoading, isError } = useProductReviews(productId);

  if (isLoading) {
    return <div>Loading reviews...</div>;
  }

  if (isError) {
    return <div>Error fetching reviews</div>;
  }
  const reviewsList = reviews || [];

  return (
    <div className='flex justify-center w-full'>
      <div className='flex flex-col w-[80%]'>
        <div className='rounded mb-6 bg-primary text-white border-primary border-2 px-16 py-1 text-center text-lg'>
          Reviews
        </div>
        
        {reviewsList.length === 0 ? (
          <div>
            <p className='text-md'>No reviews for this product yet.</p>
            <hr className="w-full h-1 bg-tertiary mt-2 mb-8" />
          </div>
        ) : (
          <ul>
            {reviewsList.map((review, index) => (
              <li key={index}>
                <div className='flex flex-row items-center'>
                  <div className='pr-4 text-lg'><CgProfile /></div>
                  <div className='text-sm font-bold'>
                    <p>User: {review.user?.email}</p>
                    <p>Date: {new Date(review.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className='text-sm mt-2'>
                  <p>Rating: {review.rating}</p>
                  <p>{review.reviewText}</p>
                </div>
                <hr className="w-full h-1 bg-tertiary mt-2 mb-8" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ReviewCreated;