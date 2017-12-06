import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getHomeInfoQuery } from "../actions/home";

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {
      count: 1,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });

    this.props.dispatch(getHomeInfoQuery(this.state.count));
  }

  render(){
    const { appState } = this.props;

    return (
      <div>
        <h2>{appState.count}</h2>
        <a href="#" onClick={this.handleClick}>gengxin</a>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appState: state.home
});

export default connect(mapStateToProps)(Home);