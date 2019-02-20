import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.scss';
import { logout } from '../../actions/authentication';

class Header extends Component {
  onLogout() {
    // this.props.logout();
  }

  renderRightNavs() {
    const { isAuth, logout } = this.props;

    if (!isAuth) {
      return (
        <li className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>
      );
    }
    
    return (
      <li className="nav-item">
        <button onClick={() => logout()} className="btn btn-link nav-link">Logout</button>
      </li>
    );
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <div className="container">
          <Link to="/" className="nav-brand">Brand</Link>

          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">{this.renderRightNavs()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps, { logout })(Header);