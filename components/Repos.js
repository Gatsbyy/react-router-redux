import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class Repos extends Component{
  render() {
    return (
      <ul>
        <li><Link to="/repos/first">reactrouter</Link></li>
      </ul>
    )
  }
}

export default Repos;