import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Header.scss'

const renderNavLinks = (isAuth) => {
    if (!isAuth) {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
        );
    }
};

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
            <div className="container">
                <Link to="/" className="nav-brand">Brand</Link>

                <div className="collapse navbar-collapse">
                    {renderNavLinks(props.isAuth)}
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    };
};

export default connect(mapStateToProps)(Header);