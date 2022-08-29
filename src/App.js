import "./App.css";
import _ from "lodash";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Movies from "./components/movies";

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <NavBar />
        <main className="container ">
          <Movies />
        </main>
      </>
    );
  }
}

export default App;
