import "./App.css";
import _, { reduceRight } from "lodash";
import { Route, Routes } from "react-router-dom";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notfound";
import Home from "./components/home";

import MovieForms from "./components/movieforms";

function App() {
  return (
    <>
      <NavBar />
      <main className="container ">
        <Routes>
          <Route path="/movies/" element={<Movies />}></Route>
          <Route path="/movies/:id" element={<MovieForms />}></Route>
          <Route path="/customers/:year?" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
