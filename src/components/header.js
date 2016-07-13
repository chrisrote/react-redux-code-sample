import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Header extends Component {
  handleLogout() {
    this.props.logoutUser();
  }
  renderAuthPaths() {
    if (!this.props.authenticated) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/login">Log In</Link>
        </li>
      )
    } else {
      return (
        <li className="nav-item">
          <a href="#" onClick={() => this.handleLogout()} className="nav-link" >Logout</a>
        </li>
      )
    }
  }
  render() {
    return (
      <nav className="navbar navbar-default">
          <div className="container-fluid">
              <ul className="nav navbar-nav navbar-right">
                {this.renderAuthPaths()}
              </ul>
            </div>
        </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, actions)(Header);
