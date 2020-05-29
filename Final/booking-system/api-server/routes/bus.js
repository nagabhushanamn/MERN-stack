
const express = require('express');

const router = express.Router();
const BusModel = require('../model/Bus')


router.get('/search', async (req, res, next) => {
    let q = req.query.q
    let [from, to] = q.split("-")
    try {
        const result = await BusModel.find({ 'service.from': from, 'service.to': to })
        res.json({
            result
        })
    } catch (err) {
        next(err)
    }
});

module.exports = router;