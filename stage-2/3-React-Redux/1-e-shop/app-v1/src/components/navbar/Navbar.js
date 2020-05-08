
import React from 'react';
import { NavLink } from 'react-router-dom'

import CartBadge from '../cart-badge/CartBadge';

import { useSelector, useDispatch } from 'react-redux'
import { doLogout } from '../../actions/user'

const Navbar = ({ title }) => {

    const user = useSelector(state => state.user)
    const { isLoggedIn } = user

    const dispatch = useDispatch()

    const handleLogout = () => {
        let action = doLogout()
        dispatch(action)
    }

    const renderLoginLink = () => {
        if (!isLoggedIn) {
            return (
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
            )
        } else {
            return (
                <li className="nav-item active">
                    <NavLink onClick={e => handleLogout()} className="nav-link" to="#">Logout</NavLink>
                </li>
            )
        }
    }

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
                        {renderLoginLink()}
                    </ul>
                    <CartBadge />
                </div>

            </nav>
        </div>
    );
};

export default React.memo(Navbar);
