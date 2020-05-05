
import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = ({ title }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">{title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/items">Items</NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/cart">Cart</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default React.memo(Navbar);
