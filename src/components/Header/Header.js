import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gray">
            <div className="container">
                <Link to="/" className="nav-brand">The Future</Link>
            </div>
        </nav>
    );
};

export default Header;