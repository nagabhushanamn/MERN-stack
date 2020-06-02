
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const reservationSchema = new Schema({
    seats: {
        type: Array
    },
    isFull: {
        type: Boolean
    }
})

const serviceSchema = new Schema({
    from: {
        type: String
    },
    to: {
        type: String
    },
    dep: {
        type: Date
    },
    arr: {
        type: Date
    },
    fare: {
        type: Number
    },
})

const busSchema = new Schema({
    busNumber: {
        type: String,
    },
    busType: {
        type: String
    },
    totalSeats: {
        type: Number
    },
    seatLayout: {
        type: String,
        default: '4/10'
    },
    service: {
        type: serviceSchema
    },
    reservation: {
        type: reservationSchema
    },
})


const BusModel = mongoose.model('Bus', busSchema);

module.exports = BusModel;

