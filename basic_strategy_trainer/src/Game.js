import React, { Component } from "react";
import { firstDeal } from "./helper";
import Hand from "./Hand";

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
    let deal = firstDeal(this.props.cards);

    let dealerHand = deal.slice(0, 2);
    let dealerScore = dealerHand.reduce((exp, card) => exp + card.score, 0);

    let playerHand = deal.slice(2);
    let playerScore = playerHand.reduce((exp, card) => exp + card.score, 0);

    return (
      <div>
        <Hand cards={dealerHand} />
        <Hand cards={playerHand} />
      </div>
    );
  }
}
export default Game;
