import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-l reset"
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            onDelete={() => this.props.onDelete(counter)}
            onIncrement={() => this.props.onIncrement(counter)}
            onDecrement={() => this.props.onDecrement(counter)}
            key={counter.key}
            value={counter.value}
          />
        ))}
      </>
    );
  }
}

export default Counters;
