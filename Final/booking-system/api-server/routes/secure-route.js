const express = require('express');

const router = express.Router();
const UserModel = require('../model/User')

//Let's say the route below is very sensitive and we want only authorized users to have access

//Displays information tailored according to the logged in user
router.get('/profile', async (req, res, next) => {
    //We'll just send back the user details and the token
    const user = await UserModel.findOne({ email: req.user.email })
    console.log(user)
    res.json({
        message: 'You made it to the secure route',
        user,
    })
});

module.exports = router;