import React, { Component } from "react";
class Filters extends Component {
  render() {
    return (
      <div
        className="nav flex-column nav-pills"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        {this.props.genres.map((g) => (
          <a
            className={
              g.value === this.props.activeGenre
                ? "nav-link active"
                : "nav-link"
            }
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            key={g.key}
            onClick={() => this.props.onFilter(g)}
          >
            {g.value}
          </a>
        ))}
      </div>
    );
  }
}

export default Filters;
