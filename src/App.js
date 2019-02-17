import React, { Component } from 'react';
import shuffle from "./utils/shuffle.js";
import cards from "./data/cards.js";
import Header from "./components/Header"
import CardContainer from './components/CardContainer';

const cardsShuffled = shuffle(cards.map(card => ({ id: card.id, image: card.image, name: card.name, clicked: false })));

class App extends Component {
  state = {
    score: 0,
    shake: false,
    hiScore: 0,
    cards: cardsShuffled.slice(0, 6)
  }

  componentDidUpdate() {
    console.log("Score:", this.state.score);
    console.log("High Score:", this.state.hiScore);
  }

  handleClick = id => {
    const selectedCard = this.state.cards.find(card => card.id === id);

    // If card has already been clicked, the game is over
    if (selectedCard.clicked) {
      console.log("Game over!");
      this.setState({
        cards: shuffle(this.state.cards.map(card => ({ id: card.id, image: card.image, name: card.name, clicked: false }))),
        score: 0,
        shake: true
      })
    } else {
      this.setState({ 
        cards: shuffle(this.state.cards
          .map(card => !(card.id === id) ? card : { id: card.id, image: card.image, name: card.name, clicked: true})),
        shake: false,
        score: this.state.score + 1,
        hiScore: Math.max(this.state.score + 1, this.state.hiScore)});
    }
  }

  
  
  render() {
    return (
      <>
        <Header />
        <CardContainer
          cards={this.state.cards}
          handleClick={this.handleClick}
          shake={this.state.shake}
        />
      </>
    );
  }
}

export default App;
