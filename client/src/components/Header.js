import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../actions";

class Header extends Component {
  onLogout = () => {
    this.props.logoutUser();
  };

  renderContent() {
    switch (this.props.auth) {
      case null:
        break;
      case false:
        return (
          <ul id="nav-mobile" className="right">
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </ul>
        );
        break;
      default:
        return (
          <ul id="nav-mobile" className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/surveys">Survays</NavLink>
            </li>
            <li>
              <button onClick={this.onLogout}>Logout</button>
            </li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            React App
          </a>
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, actions)(Header);
