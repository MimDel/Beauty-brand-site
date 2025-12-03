const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.post('/register', async (req, res) => {
    try {
        const user = await userService.createUser(req, res)
        res.status(201).json(user)
    } catch(error) {
        res.status(400).json({message: error.massage})
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await userService.verifyUser(req.body)

        const token = jwt.sign({ _id: user._id, email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });

    } catch(error) {
        res.status(401).json({message: error.message})
    }
})

module.exports = router