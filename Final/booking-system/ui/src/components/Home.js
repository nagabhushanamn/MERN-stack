import React from 'react';
import * as userApi from '../api/user'
import SearchForm from './SearchForm'
import SeatLayout from './SeatLayout';
import SeatReservation from './SeatReservation';

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
            <hr />
            <div className="row">
                <div className="col-6">
                    <SeatLayout />
                </div>
                <div className="col-6">
                    <SeatReservation />
                </div>
            </div>
        </div>
    );
};

export default Home;