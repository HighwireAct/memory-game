import React from 'react';
import "./Card.css";

const Card = props => (
  <div className="card" onClick={() => props.handleClick(props.id)}>
    <img src={props.image} alt={props.alt}/>
  </div>
)

export default Card;