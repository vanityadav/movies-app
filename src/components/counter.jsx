import React, { Component } from "react";
import "../App.css";

class Counter extends Component {
  render() {
    return (
      <>
        <div className="titleFlex">
          <p>{this.props.value}</p>
          <button onClick={this.props.onIncrement} className="delete">
            +
          </button>
          <button
            onClick={this.props.onDecrement}
            className="delete"
            disabled={this.props.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button onClick={this.props.onDelete} className="delete">
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default Counter;
