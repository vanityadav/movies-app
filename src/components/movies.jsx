import "../App.css";
import _ from "lodash";
import React, { Component } from "react";
import Filters from "../components/filters";
import { paginate } from "../utils/pagination";
import Pagination from "../components/pagination";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviestable";

class Movies extends Component {
  state = {
    sortColumn: { path: "title", order: "asc" },
    movies: getMovies(),
    sortBy: null,
    activeGenre: "All Genres",
    currentPage: 1,
    pageSize: 4,
    counters: [
      { key: 1, value: 0 },
      { key: 2, value: 0 },
      { key: 3, value: 0 },
      { key: 4, value: 0 },
    ],
    genres: [
      { key: 1, value: "All Genres" },
      { key: 2, value: "Action" },
      { key: 3, value: "Comedy" },
      { key: 4, value: "Thriller" },
    ],
  };

  handleFilter = (g) => {
    this.setState({ activeGenre: g.value, currentPage: 1 });
  };
  handleDelete = (movie) => {
    let movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };
  handleLike = (movie) => {
    let movies = this.state.movies.map((m) => {
      if (m._id !== movie._id) {
        return m;
      } else {
        movie.liked = !m.liked;
        return movie;
      }
    });
    this.setState({ movies });
  };
  handlePageChange = (c) => {
    this.setState({ currentPage: c });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  handleSort = (path) => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };
  render() {
    if (this.state.movies.length === 0)
      return (
        <>
          <hr></hr>
          <h2 className="App">There are no movies in the Database</h2>
          <hr></hr>
        </>
      );
    const filteredMovies =
      this.state.activeGenre === "All Genres"
        ? this.state.movies
        : this.state.movies.filter(
            (m) => m.genre.name === this.state.activeGenre
          );

    const sortedMovies = _.orderBy(
      filteredMovies,
      [this.state.sortColumn.path],
      [this.state.sortColumn.order]
    );

    const movies = paginate(
      sortedMovies,
      this.state.currentPage,
      this.state.pageSize
    );
    return (
      <>
        <Filters
          genres={this.state.genres}
          onFilter={this.handleFilter}
          activeGenre={this.state.activeGenre}
        />
        <h2>Showing {filteredMovies.length} in the Database</h2>
        <MoviesTable
          movies={movies}
          onDelete={this.handleDelete}
          onLiked={this.handleLike}
          onSort={this.handleSort}
          sortColumn={this.state.sortColumn}
        />
        <Pagination
          totalMovies={sortedMovies.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
          currentPage={this.state.currentPage}
        />
      </>
    );
  }
}

export default Movies;
