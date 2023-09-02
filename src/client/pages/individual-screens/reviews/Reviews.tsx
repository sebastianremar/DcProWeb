import React, { useState } from 'react';
import { Review } from "../../../../config";
import './style.css';
import ReviewCard from "./ReviewCard";
import importedReviews from './Reviews.json';

const ReviewsIndividual: React.FC = () => {
  const reviews: Review[] = importedReviews;
  
  const [numToShow, setNumToShow] = useState(10);

  const handleSeeMore = () => {
    if (numToShow === 10) {
      setNumToShow(20);
    } else if (numToShow === 20) {
      setNumToShow(reviews.length);
    }
  };

  return (
    <div className="reviews-section">
      <h2 className="reviews-header"><span>Our Customers Love Us!</span></h2>
      <div className="reviews-container">
        {reviews.slice(0, numToShow).map((review, index) => (
          <ReviewCard
            key={index}
            author={review.author}
            reviewRating={review.reviewRating}
            reviewBody={review.reviewBody}
            dateCreated={review.dateCreated}
          />
        ))}
      </div>
      {numToShow < reviews.length && (
        <button onClick={handleSeeMore} className="show-more-button">
          {numToShow === 10 ? "READ MORE" : "READ ALL REVIEWS"}
        </button>
      )}
    </div>
  );
}

export default ReviewsIndividual;
