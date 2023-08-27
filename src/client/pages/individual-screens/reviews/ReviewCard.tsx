import React from 'react';
import { Review } from '../../../../config';
import './style.css';

const ReviewCard: React.FC<Review> = ({ reviewRating, author, reviewBody, dateCreated }) => {
    const parsedRating = Math.round(parseFloat(reviewRating));
    return (
        <div className="review-card">
            <div className="author">{author}</div>
            <div className="stars">
                {Array(5).fill(0).map((_, i) => (
                    <span key={i} className={i < parsedRating ? 'star filled' : 'star'}>★</span>
                ))}
            </div>
            <div className="body">{reviewBody}</div>
            <div className="time-ago">{dateCreated}</div>
        </div>
    );
}

export default ReviewCard;