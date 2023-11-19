import React from "react";
import hollowStar from "../assets/stars/hollow-star.svg";
import yellowStar from "../assets/stars/yellow-star.svg";

function Rating({ rate }) {
  const left = 5 - rate;
  return (
    <div className="rating">
      <RepeatElement
        n={rate}
        element={<img src={yellowStar} alt="yellow star" />}
      />
      <RepeatElement
        n={left}
        element={<img src={hollowStar} alt="hollow star" />}
      />
    </div>
  );
}

function RepeatElement({ n, element }) {
  const elementsArray = Array.from({ length: n }, (_, index) => (
    <span key={index}>{element}</span>
  ));

  return <>{elementsArray}</>;
}

export default Rating;
