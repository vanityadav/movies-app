import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-md">
          <a className="navbar-brand" href="#">
            Navbar
            {/* <span className="bg-light cart">{this.props.totalCounters}</span> */}
          </a>
        </div>
      </nav>
    );
  }
}

export default NavBar;
