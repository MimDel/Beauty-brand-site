const express = require('express')
const router = express.Router()
const userService = require('../services/userService')

router.post('/register', async (req, res) => {
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json(user)
    } catch(error) {
        res.status(400).json({message: error.massage})
    }
})

router.post('/login', async (req, res) => {
    try {
        const user = await userService.verifyUser(req.body)

        //Store user info in session
        req.session.userId = user._id
        req.session.isAuthenticated = true
        console.log("Attempting to match password:", user.password);

        res.status(200).json(user)
    } catch(error) {
        res.status(401).json({message: error.message})
    }
})

module.exports = router