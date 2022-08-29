import React, { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";

function MovieForms() {
  const { id } = useParams();
  let navigate = useNavigate();
  return (
    <>
      <h1>Movie Forms {id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </>
  );
}

export default MovieForms;
