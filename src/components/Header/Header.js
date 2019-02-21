import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import './Header.scss';
import { logout } from '../../actions/authentication';

class Header extends Component {
  renderRightNavs() {
    const { isAuth, logout, location } = this.props;

    if (!isAuth) {
      return (
        <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
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

  renderLeftNavs() {
    const { isAuth, location } = this.props;

    if (!isAuth) return null;

    return (
      <ul className="navbar-nav ml-5 mr-auto">
        <li className={`nav-item ${location.pathname.toString().split('/')[1] === 'courses' ? 'active' : ''}`}>
          <Link to="/courses" className="nav-link">Courses</Link>
        </li>
      </ul>
    );
  }

  renderNavLink({ exact, to, label }) {
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-gray">
        <div className="container">
          <Link to="/" className="nav-brand">Brand</Link>

          <div className="collapse navbar-collapse">
            {this.renderLeftNavs()}
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

export default withRouter(
  connect(mapStateToProps, { logout })(Header)
);