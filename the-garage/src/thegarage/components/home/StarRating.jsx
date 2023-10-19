import { useState } from 'react';

export const StarRating = ({
  width = '',
  itemRating = 0,
  disabled = false,
}) => {
  const [rating, setRating] = useState(itemRating);
  const [hover, setHover] = useState(0);
  return (
    <div
      className={`star-rating`}
      style={{ width: 'auto' }}
      data-cy="star-rating"
    >
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
            disabled={disabled}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
