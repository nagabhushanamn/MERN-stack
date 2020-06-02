import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

const SeatLayout = () => {

    const dispatch = useDispatch()

    const reservedSeats = useSelector(state => state.seats.reservedSeats) || []
    const selectedSeats = useSelector(state => state.seats.selectedSeats) || []


    const handleEvent = (e, seatNumber) => {
        if (!reservedSeats.includes(seatNumber))
            dispatch({ type: 'SELECT_SEATS', seatNumber })
    }

    useEffect(() => {

        axios
            .get('http://localhost:8080/seats/reserved-seats')
            .then(response => response.data)
            .then(data => {
                let reservedSeats = data.result.reservation.seats
                dispatch({ type: 'LOAD_RESERVED_SEATS', reservedSeats })
            })


    }, [])


    const changeBgColor = (item) => {
        if (reservedSeats.includes(item))
            return 'red'
        if (selectedSeats.includes(item))
            return 'green'
        else
            return 'grey'
    }

    const renderSeats = () => {
        return [1, 2, 3, 4, 5, 6, 7, 8].map(item => {
            return (
                <span style={{
                    margin: '12px', fontSize: '15px',
                    cursor: 'pointer',
                    backgroundColor: changeBgColor(item)
                }}
                    onClick={e => handleEvent(e, item)}
                    className="badge" key={item}>
                    {item}
                </span>
            )
        })
    }

    return (
        <div className="" style={{ width: '200px', height: '400px' }}>
            {renderSeats()}
        </div>
    );
};

export default SeatLayout;