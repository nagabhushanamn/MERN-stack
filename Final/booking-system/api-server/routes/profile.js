const express = require('express');

const router = express.Router();
const UserModel = require('../model/User')

//Let's say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
router.get('/', async (req, res, next) => {
    //We'll just send back the user details and the token
    try {
        const user = await UserModel.findOne({ email: req.user.email })
        res.json({
            message: 'You made it to the secure route',
            user,
        })
    } catch (err) {
        next(err)
    }
});

module.exports = router;