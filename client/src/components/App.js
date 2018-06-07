import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { Landing } from "./Landing";
import * as actions from "../actions";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    let routes;
    if (this.props.auth) {
      routes = (
        <div>
          <Route path="/surveys" exact component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      );
    }
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={Landing} />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

const mapPropsToState = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapPropsToState, actions)(App);
