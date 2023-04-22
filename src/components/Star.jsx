import React from "react";

const Star = ({ star }) => {
  const rating = Array.from({ length: 5 }, (ele, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {star >= index + 1 ? (
          <i class="fa-sharp fa-solid fa-star"></i>
        ) : star >= number ? (
          <i class="fa-regular fa-star-half-stroke"></i>
        ) : (
          <i class="fa-regular fa-star"></i>
        )}
      </span>
    );
  });

  return <>{rating}</>;
};

export default Star;
