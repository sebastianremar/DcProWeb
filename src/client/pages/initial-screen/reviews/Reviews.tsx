import Slider from "react-slick";  
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { Review } from '../../../../config';
import importedReviews from '../../individual-screens/reviews/Reviews.json';
import './style.css';

const PortadaReviews: React.FC = () => {
    const reviews: Review[] = importedReviews.slice(0,9);

    const settings = {
        dots: false,
        infinite: true,  // This ensures the looping behavior
        speed: 500,
        slidesToShow: 3,  // Display three reviews at once
        slidesToScroll: 3  // Move three reviews on arrow click
    };

    const truncateText = (text: string | null, maxLength: number = 150) => {
        if (!text) return "";  // Handles null or undefined
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + "...";
    }
      

      return (
        <div className="portada-reviews-homepage-container">
            <h1 className="portada-review-header">OUR CUSTOMERS LOVE US</h1>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className="slide">
                        <div className="portada-review-card-homepage">
                            <div className="portada-author">{review.author}</div>
                            <div className="portada-stars">
                                {Array(5).fill(0).map((_, i) => (
                                    <span key={i} className={i < Math.round(parseFloat(review.reviewRating)) ? 'portada-star filled' : 'portada-star'}>★</span>
                                ))}
                            </div>
                            <div className="portada-body">
                              {truncateText(review.reviewBody)}
                              {review.reviewBody && review.reviewBody.length > 150 && review.url && <a href={review.url} className="portada-review-read-more">Read More</a>}
                            </div>
                            <div className="portada-time-ago">{review.dateCreated}</div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PortadaReviews;
