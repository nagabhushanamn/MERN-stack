import React from 'react';
import * as userApi from '../api/user'
import SearchForm from './SearchForm'
import SeatLayout from './SeatLayout';

const Home = () => {

    const handleEvent = e => {
        userApi.loadUserProfile()
            .then(response => response.data)
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div className="">
            <button onClick={e => handleEvent(e)} className="btn btn-primary">View Profile</button>
            <hr />
            <SearchForm />
            <hr/>
            <SeatLayout />
        </div>
    );
};

export default Home;