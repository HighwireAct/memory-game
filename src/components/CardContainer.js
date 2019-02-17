import React from 'react';
import Card from './Card.js';
import "./CardContainer.css";

const CardContainer = props => (
  <div id="card-container" className={(props.shake) ? "shake" : ""}>
    {
      props.cards.map(card => (
        <Card
          key={card.id}
          image={card.image}
          alt={card.name}
          id={card.id}
          clicked={card.clicked}
          handleClick={props.handleClick}
        />
      ))
    }
  </div>
)

export default CardContainer;