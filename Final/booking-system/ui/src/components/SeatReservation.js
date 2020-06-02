


import React from 'react';
import { useSelector } from 'react-redux'
import * as seatsApi from '../api/seats';

const SeatReservation = () => {

    let selectedSeats = useSelector(state => state.seats.selectedSeats) || []

    const handleSubmitEvent = () => {
        seatsApi.doReserve(selectedSeats)
            .then(response => response.data)
            .then(data => {
                //...
                console.log(data)
            })
    }

    const renderNameAgeFields = () => {
        return selectedSeats.map(item => {
            return (
                <li className="list-group-item" key={item}>
                    <span className="badge badge-dark">{item}</span>
                    <div className="row">
                        <div className="col-9">
                            <input className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-3">
                            <input className="form-control" placeholder="Age" />
                        </div>
                    </div>
                </li>
            )
        })
    }

    return (
        <div>
            <hr />
            slected seats : {selectedSeats.join(",")}
            <hr />
            <ul>
                {renderNameAgeFields()}
            </ul>
            <hr />
            <button onClick={e => handleSubmitEvent()} className="btn btn-primary">submit</button>
        </div>
    );
};

export default SeatReservation;