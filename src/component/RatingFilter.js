import React from 'react'
import Rating from './Rating'

const RatingFilter = ({ onChange, etoile }) => (
  <div className="rating-filter">
    <span className="rating-filter-text">Minimum Rating</span>
    <Rating
      etoile={etoile}
      onChangeEtoiles={newRating => {
        onChange(newRating);
      }}
    />
  </div>
);

export default RatingFilter