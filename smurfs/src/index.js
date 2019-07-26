import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';
import smurfState from './store/reducers';

import "./scss/index.scss";

import App from "./components/App";

const store = createStore( smurfState, applyMiddleware(thunk) );

const AppWithRouter = withRouter(App);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>, document.getElementById("root")
);
