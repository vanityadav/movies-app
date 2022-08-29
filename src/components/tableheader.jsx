import React, { Component } from "react";

class TableHeader extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th onClick={() => this.props.raiseSort("title")}>Title</th>
          <th onClick={() => this.props.raiseSort("genre.name")}>Genre</th>
          <th onClick={() => this.props.raiseSort("numberInStock")}>Stock</th>
          <th onClick={() => this.props.raiseSort("dailyRentalRate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
