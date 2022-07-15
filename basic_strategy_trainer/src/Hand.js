import React, { Component } from "react";
import Card from "./Card";
import "./Hand.css";

class Hand extends Component {
  render() {
    let title;
    if (this.props.blackJack) {
      title = <h1>BLACKJACK</h1>;
    }

    return (
      <div className="Hand-cards">
        {title}
        {this.props.cards.map((c) => (
          <Card score={c.score} img={c.img} />
        ))}
      </div>
    );
  }
}
export default Hand;
