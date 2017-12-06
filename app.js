import React, { Component } from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Loading from "./components/Loading";
import reducer from "./reducer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const AsyncHome = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

const AsyncAbout = Loadable({
  loader: () => import('./components/About'),
  loading: Loading,
});

const AsyncRepos = Loadable({
  loader: () => import('./components/Repos'),
  loading: Loading,
});

const AsyncRepo = Loadable({
  loader: () => import('./components/Repo'),
  loading: Loading,
});

const initState = {};
const enhancer = applyMiddleware(thunk);
const store = createStore(reducer, initState, enhancer);

render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={AsyncHome}/>
        <Route path="/about" component={AsyncAbout}/>
        <Route exact path="/repos" component={AsyncRepos}/>
        <Route exact path="/repos/:first" component={AsyncRepo}/>
      </Switch>
    </Router>
  </Provider>
), document.getElementById('app'));