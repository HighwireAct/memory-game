import React, { Component } from 'react';
import shuffle from "./utils/shuffle.js";
import cards from "./data/cards.js";
import Header from "./components/Header"
import CardContainer from './components/CardContainer';
import newRecord from './new-record.wav';
import loss from './loss.wav';

const cardsShuffled = shuffle(cards.map(card => ({ id: card.id, image: card.image, name: card.name, clicked: false })));

class App extends Component {
  state = {
    score: 0,
    shake: false,
    hiScore: 0,
    prevHiScore: 0,
    cards: cardsShuffled.slice(0, 8),
    audio: {
      newRecord: new Audio(newRecord),
      loss: new Audio(loss)
    }
  }

  playSound = sound => {
    this.state.audio[sound].play();
  }

  handleClick = id => {
    const selectedCard = this.state.cards.find(card => card.id === id);

    // If card has already been clicked, the game is over
    if (selectedCard.clicked) {
      this.setState({
        cards: shuffle(this.state.cards.map(card => ({ id: card.id, image: card.image, name: card.name, clicked: false }))),
        score: 0,
        prevHiScore: this.state.hiScore,
        shake: true
      })
      // Check to see if new high score is higher than the previous
      if (this.state.prevHiScore < this.state.hiScore) {
        this.playSound('newRecord');
      } else {
        this.playSound('loss');
      }
    } else {
      this.setState({ 
        cards: shuffle(this.state.cards
          .map(card => (card.id === id) ? { id: card.id, image: card.image, name: card.name, clicked: true} : card)),
        shake: false,
        score: this.state.score + 1,
        hiScore: Math.max(this.state.score + 1, this.state.hiScore)});
    }
  }
  
  render() {
    return (
      <>
        <Header
          score={this.state.score}
          hiScore={this.state.hiScore} 
        />
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
