import React from 'react';
import ScoreCounter from './ScoreCounter';
import "./Header.css";

const Header = props => (
  <>
    <header>
      <h1>SMASH MEMORY</h1>
      <ScoreCounter
        score={props.score}
        hiScore={props.hiScore}
      />
    </header>
  </>
)
export default Header;