import React, { Component } from "react";
import { firstDeal } from "./helper";
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
      9: {
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

  generateButtons() {
    return this.props.buttons.map((b) => (
      <button
        key={b}
        value={b}
        //onClick
      >
        {b}
      </button>
    ));
  }
  render() {
    //generate four cards randomly, distribute them to the dealer and the player
    //and calculate their score
    let deal = firstDeal(deck);

    let dealerHand = deal.slice(0, 2);
    let dealerScore = dealerHand.reduce((exp, card) => exp + card.score, 0);

    let playerHand = deal.slice(2);
    let playerScore = playerHand.reduce((exp, card) => exp + card.score, 0);

    //generate response buttons
    let buttons = this.generateButtons();

    return (
      <div>
        <Hand
          cards={dealerHand}
          aggScore={dealerScore}
          blackJack={dealerScore === 21}
        />
        <Hand
          cards={playerHand}
          aggScore={playerScore}
          blackJack={playerScore === 21}
        />
        <p>{buttons}</p>
      </div>
    );
  }
}
export default Game;
