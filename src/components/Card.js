import React from "react";
import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={katie} className="katie" />
      <div className="star">
        <img src={star} />
        <p className="rating">
          {props.rating} ({props.reviewCount}). {props.country}
        </p>
      </div>

      <p>{props.title}</p>
      <p>
        {" "}
        <strong>From ${props.price}</strong>/ person{" "}
      </p>
    </div>
  );
}
