import React from "react";
import Rating from "./Rating";
const MovieCard = props => {
  const { movie = {} } = props;
  const { title = "", image = "", rating = 0 } = movie;
  return (
    <div className="Cards">
      
        <div className="movieCard">
          <div className="rating-title">
            <p>{title}</p>

            <p className="movie-rating">
              <Rating etoile={rating} />
            </p>
          </div>
          <img src={image} width="300px" height="300px" alt="film" />
        </div>
      
    </div>
  );
}
export default MovieCard;
