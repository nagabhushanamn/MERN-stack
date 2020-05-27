import React from 'react';
import * as userApi from '../api/user'

const Home = () => {

    const handleEvent = e => {
        userApi.loadUserProfile()
            .then(response => response.data)
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="jumbotron">
            <button onClick={e => handleEvent(e)} className="btn btn-primary">View Profile</button>
        </div>
    );
};

export default Home;