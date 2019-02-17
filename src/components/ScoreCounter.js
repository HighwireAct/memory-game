import React from 'react';

const ScoreCounter = props => (
  <div>
    <strong>Score:</strong> {props.score} | <strong>High Score:</strong> {props.hiScore}
  </div>
);

export default ScoreCounter;