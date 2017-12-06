import React, { Component } from "react";
import { render } from "react-dom";

class Repo extends Component{
  render() {
    return (
      <div>{this.props.match.params.first}</div>
    )
  }
}

export default Repo;