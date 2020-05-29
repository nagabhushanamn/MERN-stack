import React, { useState } from 'react';

const SeatLayout = () => {

    let [reservedSeats, setReservedSeats] = useState([1, 2, 3])
    let [selectedSeats, setSelectedSeats] = useState([])

    const handleEvent = (e, seatNumber) => {
        if (reservedSeats.includes(seatNumber)) return
        setSelectedSeats([...selectedSeats, seatNumber])
    }

    return (
        <div className="card card-body" style={{ width: '200px', height: '400px' }}>
            <i className="fa fa-shopping-cart"
                style={{ margin: '5px', cursor: 'pointer', color: reservedSeats.includes(1) ? 'red' : '' }}
                onClick={e => handleEvent(e, 1)}></i>
            <i className="fa fa-shopping-cart"
                style={{ margin: '5px', cursor: 'pointer', color: selectedSeats.includes(2) ? 'green' : '' }}
                onClick={e => handleEvent(e, 2)}></i>
            <i className="fa fa-shopping-cart"
                style={{ margin: '5px', cursor: 'pointer', color: selectedSeats.includes(3) ? 'green' : '' }}
                onClick={e => handleEvent(e, 3)}
            ></i>
        </div>
    );
};

export default SeatLayout;