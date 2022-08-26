import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Pagination from "./components/pagination";
import Filters from "./components/filters";
import { getMovies } from "./services/fakeMovieService";
import { paginate } from "./utils/pagination";
import { sort } from "./utils/sort";
import _ from "lodash";

class App extends Component {
  state = {
    sortColumn: { path: "title", order: "asc" },
    sortBy: null,
    activeGenre: "All Genres",
    currentPage: 1,
    pageSize: 4,
    movies: getMovies(),
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
        <main className="container ">
          <hr></hr>
          <h2 className="App">
            Showing {filteredMovies.length} in the Database
          </h2>
          <hr></hr>
          <div className="main-cont">
            <Filters
              genres={this.state.genres}
              onFilter={this.handleFilter}
              activeGenre={this.state.activeGenre}
            />
            <Movies
              movies={movies}
              onDelete={this.handleDelete}
              onLiked={this.handleLike}
              onSort={this.handleSort}
            />
          </div>
          <div className="pages">
            <Pagination
              totalMovies={sortedMovies.length}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>

          <div className="disnone">
            <NavBar
              totalCounters={
                this.state.counters.filter((m) => m.value > 0).length
              }
            />
            <Counters
              counters={this.state.counters}
              onReset={this.resetValue}
              onIncrement={this.increment}
              onDecrement={this.decrement}
              onDelete={this.deleteCounter}
            />
          </div>
        </main>
      </>
    );
  }
  increment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  decrement = (counter) => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    } else alert("Item quantity is already Zero");
  };
  resetValue = () => {
    const counters = this.state.counters.map((m) => (m.value = 0));
    this.setState({ ...counters });
  };
  deleteCounter = (counter) => {
    let counters = this.state.counters.filter((c) => c.key !== counter.key);
    this.setState({ counters });
  };
}

export default App;
