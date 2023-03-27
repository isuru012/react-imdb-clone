import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './StartRating.css'


const StarRating = ({ rating }) => {
  const getDecimalValue = () => {
    const decimalValue = rating % 1;
    return Math.round(decimalValue * 10) / 10;
  };

  const getStarRating = () => {
    const starRating = Math.round(rating * 2) / 2;
    return starRating;
  };

  const getFilledStars = () => {
    const starTotal = 5;
    const filledStars = Math.floor(rating / 2);
    const halfFilledStar = rating % 2 !== 0 ? 1 : 0;
    const emptyStars = starTotal - filledStars - halfFilledStar;
    const stars = [];
  
    for (let i = 0; i < filledStars; i++) {
      stars.push(<span key={i} className="fas fa-star checked"></span>);
    }
    if (halfFilledStar) {
      stars.push(<span key={filledStars} className="fas fa-star-half-alt checked"></span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={filledStars + halfFilledStar + i} className="far fa-star unchecked"></span>);
    }
  
    return (
      <div className="star-rating">
        {stars}
        <span className="rating-number">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="star-rating">
      <div className="filled-stars">{getFilledStars()}</div>
      {/* <div className="rating-amount">
        {getStarRating()}
        {getDecimalValue() > 0 && <span>.{getDecimalValue()}</span>}
      </div> */}
    </div>
  );
};

export default StarRating;