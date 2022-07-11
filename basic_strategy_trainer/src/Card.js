import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h1>{this.props.card.name}</h1>
      </div>
    );
  }
}
export default Card;
