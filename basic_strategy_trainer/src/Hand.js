import React, { Component } from "react";
import Card from "./Card";
import "./Hand.css";

class Hand extends Component {
  render() {
    // console.log(this.props.cards);
    return (
      <div className="Hand-cards">
        {this.props.cards.map((c) => (
          <Card score={c.score} img={c.img} />
        ))}
      </div>
    );
  }
}
export default Hand;
