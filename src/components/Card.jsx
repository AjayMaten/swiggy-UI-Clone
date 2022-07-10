import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="cardComponent">
      <img src={props.img} alt={props.name} />
      <div>
        <p>{props.name}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
}

export default Card;
