import React from 'react'


const Rating = ({ etoile, onChangeEtoiles = () => {} }) => {
  let et = [];
  for (let i = 0; i < 5; i++) {
    if (i < etoile) {
      et.push(
        <span
          className="Rating"
          onClick={() => onChangeEtoiles(i + 1)}
          key={i}
        >
          ★
        </span>
      );
    } else {
      et.push(
        <span
          className="Rating"
          onClick={() => onChangeEtoiles(i + 1)}
          key={i}
        >
          ☆
        </span>
      );
    }
  }
  return <div>{et}</div>;
};

export default Rating;