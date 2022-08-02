import React, { Component } from "react";
import { dealNCards } from "./helper";
import deck from "./deck";
import Hand from "./Hand";

class Game extends Component {
  static defaultProps = {
    stratChartHardTotal: {
      5: {
        2: "hit",
        3: "hit",
        4: "hit",
        5: "hit",
        6: "hit",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      6: {
        2: "hit",
        3: "hit",
        4: "hit",
        5: "hit",
        6: "hit",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      7: {
        2: "hit",
        3: "hit",
        4: "hit",
        5: "hit",
        6: "hit",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      8: {
        2: "hit",
        3: "hit",
        4: "hit",
        5: "hit",
        6: "hit",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      9: {
        2: "hit",
        3: "double",
        4: "double",
        5: "double",
        6: "double",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      10: {
        2: "double",
        3: "double",
        4: "double",
        5: "double",
        6: "double",
        7: "double",
        8: "double",
        9: "double",
        10: "hit",
      },
      11: {
        2: "double",
        3: "double",
        4: "double",
        5: "double",
        6: "double",
        7: "double",
        8: "double",
        9: "double",
        10: "double",
      },
      12: {
        2: "hit",
        3: "hit",
        4: "stand",
        5: "stand",
        6: "stand",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      13: {
        2: "stand",
        3: "stand",
        4: "stand",
        5: "stand",
        6: "stand",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      14: {
        2: "stand",
        3: "stand",
        4: "stand",
        5: "stand",
        6: "hit",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      15: {
        2: "stand",
        3: "stand",
        4: "stand",
        5: "stand",
        6: "stand",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "surrender",
      },
      16: {
        2: "stand",
        3: "stand",
        4: "stand",
        5: "stand",
        6: "stand",
        7: "hit",
        8: "hit",
        9: "surrender",
        10: "surrender",
      },
      17: {
        2: "stand",
        3: "stand",
        4: "stand",
        5: "stand",
        6: "stand",
        7: "stand",
        8: "stand",
        9: "stand",
        10: "stand",
      },
    },

    stratChartPairs: {
      2: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "split",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      3: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "split",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      4: {
        2: "hit",
        3: "hit",
        4: "hit",
        5: "split",
        6: "split",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      5: {
        2: "double",
        3: "double",
        4: "double",
        5: "double",
        6: "double",
        7: "double",
        8: "double",
        9: "double",
        10: "hit",
      },
      6: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "hit",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      7: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "split",
        8: "hit",
        9: "hit",
        10: "hit",
      },
      8: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "split",
        8: "split",
        9: "split",
        10: "split",
      },
      9: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "stand",
        8: "split",
        9: "split",
        10: "stand",
      },
      10: {
        2: "split",
        3: "split",
        4: "split",
        5: "split",
        6: "split",
        7: "split",
        8: "split",
        9: "split",
        10: "split",
      },
    },

    buttons: ["hit", "stand", "double", "split", "surrender"],
  };

  constructor(props) {
    super(props);
    this.state = {
      playerHand: dealNCards(deck, 2, false),
      dealerHand: dealNCards(deck, 1, true),
      blackJack: false,
    };
  }

  handleChoice(evt) {
    let choice = evt.target.value;
    let playerScore = this.state.playerHand.reduce(
      (exp, card) => exp + card.score,
      0
    );

    if (this.state.playerHand[0] === this.state.playerHand[1]) {
      console.log("pairs");
    } else {
      ///add the ace condition as an else if here
      console.log("hard total");
    }
  }
  generateButtons() {
    return this.props.buttons.map((b) => (
      <button key={b} value={b} onClick={this.handleChoice}>
        {b}
      </button>
    ));
  }
  render() {
    let gameState;
    let playerScore = this.state.playerHand.reduce(
      (exp, card) => exp + card.score,
      0
    );

    if (playerScore === 21) {
      gameState = "BLACKJACK";
    } else {
      gameState = this.generateButtons();
    }

    return (
      <div>
        <Hand cards={this.state.dealerHand} />
        <Hand cards={this.state.playerHand} />
        <p>{gameState}</p>
      </div>
    );
  }
}
export default Game;
