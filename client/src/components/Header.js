import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actions from "../actions";
import Payments from "./Payments";

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
              <Payments />
            </li>
            <li style={{ margin: "0px 10px" }}>
              Credits : {this.props.auth.credits}
            </li>
            <li style={{ margin: "0px 10px" }}>{this.props.auth.fullName}</li>
            <li>
              <NavLink to="" onClick={this.onLogout}>
                Logout
              </NavLink>
            </li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <NavLink
            to={this.props.auth ? "/surveys" : "/"}
            className="brand-logo"
          >
            React App
          </NavLink>
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
