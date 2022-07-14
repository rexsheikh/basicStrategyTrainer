import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    // console.log(`card: ${JSON.stringify(this.props.score)}`);
    return (
      <div className="Card">
        <div className="Card-img">
          <img src={this.props.img} style={{ width: "200px" }} />
        </div>
      </div>
    );
  }
}
export default Card;
