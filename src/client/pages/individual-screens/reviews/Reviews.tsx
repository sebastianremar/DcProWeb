import { Review } from "../../../../config";
import './style.css';
import ReviewCard from "./ReviewCard";
import importedReviews from './Reviews.json';


const ReviewsIndividual: React.FC = () => {
  const reviews: Review[] = importedReviews;

  return (
    <div className="reviews-section">
    <h2 className="reviews-header"><span>Our Customers Love Us!</span></h2>
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <ReviewCard
          key={index}
          author={review.author}
          reviewRating={review.reviewRating}
          reviewBody={review.reviewBody}
          dateCreated={review.dateCreated}
        />
      ))}
    </div>
  </div>
  );
}

export default ReviewsIndividual;