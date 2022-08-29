import React, { Component } from "react";
import TableBody from "./tablebody";
import TableHeader from "./tableheader";

class MoviesTable extends Component {
  render() {
    return (
      <table>
        <TableHeader
          data={this.props.movies}
          sortColumn={this.props.sortColumn}
          raiseSort={this.props.onSort}
        />
        <TableBody
          data={this.props.movies}
          onLiked={this.props.onLiked}
          onDelete={this.props.onDelete}
        />
      </table>
    );
  }
}

export default MoviesTable;
