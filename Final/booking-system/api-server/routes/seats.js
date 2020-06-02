



const express = require('express');

const router = express.Router();
const BusModel = require('../model/Bus')


router
    .get('/reserved-seats', async (req, res, next) => {
        let busNumber = 'KA12 G1212'
        let result = await BusModel
                     .findOne({ busNumber })
                     .select('reservation')
        res.json({result})             
    })
    .post('/reserve', async (req, res, next) => {
        const seats = req.body

        // const bus = await BusModel.findOne({ busNumber: 'KA12 G1212' })
        // if (!bus.reservation) {
        //     bus.reservation = {
        //         seats
        //     }
        // }
        // else {
        //     bus.reservation.seats = [bus.reservation.seats, [...seats]]
        // }
        // const result = await bus.save()

        const result = await BusModel.updateOne({ busNumber: 'KA12 G1212' }, {
            $push: { 'reservation.seats': seats }
        })

        res.json({ message: 'reserved', result })
    });

module.exports = router;