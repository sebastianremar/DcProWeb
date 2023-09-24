import { useState, useEffect } from 'react';
import Slider from "react-slick";
import { Review } from '../../../../config';
import importedReviews from '../../individual-screens/reviews/Reviews.json';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

const ReviewsPortada: React.FC = () => {
    const reviews: Review[] = importedReviews.slice(0, 9);

    const [cardWidth, setCardWidth] = useState('calc(33.33% - 30px)');
    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    });

    const [maxLength, setMaxLength] = useState(150);

    const truncateText = (text: string | null) => {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + "...";
    }

    useEffect(() => {
        const updateSliderSettings = () => {
            if (window.innerWidth <= 425) {
                setMaxLength(100);
            } else {
                setMaxLength(150);
            }

            if (window.innerWidth <= 980) {
                setSliderSettings(prev => ({ ...prev, slidesToShow: 1, slidesToScroll: 1 }));
                setCardWidth('100%');
            } else if (window.innerWidth <= 1480) {
                setSliderSettings(prev => ({ ...prev, slidesToShow: 2, slidesToScroll: 2 }));
                setCardWidth('calc(50% - 50px)');
            } else {
                setSliderSettings(prev => ({ ...prev, slidesToShow: 3, slidesToScroll: 3 }));
                setCardWidth('calc(33.33% - 30px)');
            }
        };

        window.addEventListener('resize', updateSliderSettings);
        updateSliderSettings();

        return () => {
            window.removeEventListener('resize', updateSliderSettings);
        };
    }, []);

    return (
        <div className="portada-reviews-homepage-container">
            <h1 className="portada-review-header">OUR CUSTOMERS LOVE US</h1>
            <Slider {...sliderSettings}>
                {reviews.map((review, index) => (
                    <div key={index} className="slide" style={{ width: cardWidth }}>
                        <div className="portada-review-card-homepage">
                            <div className="portada-author">{review.author}</div>
                            <div className="portada-stars">
                                {Array(5).fill(0).map((_, i) => (
                                    <span key={i} className={i < Math.round(parseFloat(review.reviewRating)) ? 'portada-star filled' : 'portada-star'}>★</span>
                                ))}
                            </div>
                            <div className="portada-body">
                                {truncateText(review.reviewBody)}
                                {review.reviewBody && review.reviewBody.length > maxLength && review.url && <a href={review.url} className="portada-review-read-more">Read More</a>}
                            </div>
                            <div className="portada-time-ago">{review.dateCreated}</div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="button-container-review">
                <Link to="/reviews">
                    <button>See More</button>
                </Link>
            </div>
        </div>
    );
}

export default ReviewsPortada;
