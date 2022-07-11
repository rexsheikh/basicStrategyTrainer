import React, { Component } from "react";
import Card from "./Card";

class Game extends Component {
  static defaultProps = {
    cards: [
      { name: "two", score: 2 },
      { name: "three", score: 3 },
      { name: "four", score: 4 },
      { name: "five", score: 5 },
      { name: "six", score: 6 },
      { name: "seven", score: 7 },
      { name: "eight", score: 8 },
      { name: "nine", score: 9 },
      { name: "ten", score: 10 },
      { name: "jack", score: 10 },
      { name: "queen", score: 10 },
      { name: "king", score: 10 },
      { name: "ace", score: 11 },
    ],
  };
  render() {
    let randIdx1 = Math.floor(Math.random() * this.props.cards.length);
    let randIdx2 = Math.floor(Math.random() * this.props.cards.length);
    let dealer = this.props.cards[randIdx1];
    let player = this.props.cards[randIdx2];

    return (
      <div>
        <Card card={dealer} />
        <Card card={player} />
      </div>
    );
  }
}
export default Game;
