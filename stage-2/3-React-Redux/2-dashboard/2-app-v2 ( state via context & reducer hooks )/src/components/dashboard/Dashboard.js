
import React, { useContext } from 'react';
import UserProfile from '../user-profile/UserProfile'
import { Route, Link } from 'react-router-dom'

import UserDetContext from '../../context/UserDetContext'

const Dashboard = () => {
    const { userDet } = useContext(UserDetContext)
    return (
        <div>
            <hr />
            Welcome : {userDet.name}
            <hr />
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard/profile">User-Profile</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Logout</a>
                </li>
            </ul>
            <hr />
            <Route path="/dashboard/profile" component={props => <UserProfile />} />
        </div>
    );
};

export default Dashboard;