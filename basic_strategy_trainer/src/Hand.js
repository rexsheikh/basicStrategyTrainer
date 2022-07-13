import React, { Component } from "react";
import Card from "./Card";

class Hand extends Component {
  render() {
    return (
      <div className="Hand">
        {this.props.cards.map((c) => (
          <Card name={c.name} />
        ))}
      </div>
    );
  }
}
export default Hand;
