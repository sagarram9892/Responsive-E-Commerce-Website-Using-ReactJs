import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarHalf } from "react-icons/md";
import "../styles/Star.css";

function Star({ stars, reviews }) {
  const ratingstar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars > index + 1 ? (
          <MdOutlineStar className="star-icon"/>
        ) : stars >= number ? (
          <MdOutlineStarHalf className="star-icon"/>
        ) : (
          <MdOutlineStarOutline className="star-icon"/>
        )}
      </span>
    );
  });
  return (
    <>
      <div className="star">{ratingstar}
      <p className="reviews">({reviews} customer reviews)</p>
      </div>
    </>
  );
}

export default Star;
