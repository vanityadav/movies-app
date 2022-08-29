import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "../components/like";

class TableBody extends Component {
  render() {
    const { data, onLiked, onDelete } = this.props;
    return (
      <tbody>
        {data.map((movie) => (
          <tr key={movie._id}>
            <td>
              <Link to={`/movies/${movie._id}`}> {movie.title} </Link>
            </td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onLiked={() => onLiked(movie)} />
            </td>
            <td>
              <button onClick={() => onDelete(movie)} className="delete">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
