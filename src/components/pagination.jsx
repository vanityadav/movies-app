import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const pages = Math.ceil(props.totalMovies / props.pageSize);
  if (pages === 1) return null;
  const pagearray = _.range(1, pages + 1);

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination m-2">
        {pagearray.map((c) => (
          <li
            key={c}
            className={
              c === props.currentPage ? "page-item active" : "page-item"
            }
            onClick={() => props.onPageChange(c)}
          >
            <a className="page-link">{c}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
