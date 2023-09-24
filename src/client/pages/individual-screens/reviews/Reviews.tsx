import React, { useEffect, useRef, useState } from 'react';
import { Review } from "../../../../config";
import './style.css';
import ReviewCard from "./ReviewCard";
import importedReviews from './Reviews.json';
import CustomButton from '../../../components/CustomButton';

const ReviewsIndividual: React.FC = () => {
  const reviews: Review[] = importedReviews;

  const topElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    topElementRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

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
      <div className='reviews-button-container'>
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
          <div className='button-container'>
            <CustomButton
              text={numToShow === 10 ? "See More" : "See all"}
              onClick={handleSeeMore}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ReviewsIndividual;
