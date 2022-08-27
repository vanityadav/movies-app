import React, { Component } from "react";
import "../App.css";
import Like from "../components/like";

class Movies extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    if (this.props.movies.length === 0)
      return (
        <>
          <hr></hr>
          <h2 className="App">There are no movies in the Database</h2>
          <hr></hr>
        </>
      );

    return (
      <>
        <div>
          <table>
            <thead>
              <tr>
                <th onClick={() => this.raiseSort("title")}>Title</th>
                <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
                <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
                <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.movies.map((movie) => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onLiked={() => this.props.onLiked(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.props.onDelete(movie)}
                      className="delete"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Movies;
