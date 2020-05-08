import React,{useContext} from 'react';

import UserDetContext from '../../context/UserDetContext'

const UserProfile = () => {
    const {userDet} = useContext(UserDetContext)
    return (
        <div className="card">
            <div className="card-header">User Profile</div>
            <div className="card-body">
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{userDet.name}</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{userDet.email}</td>
                        </tr>
                        <tr>
                            <td>Address</td>
                            <td>{userDet.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default UserProfile;