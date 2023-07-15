const express = require('express')
const Veterinary = require('../models/veterinaryModel')

const {createVeterinary, getClients, getSingleClient} = require('../controllers/veterinaryController')


const router = express.Router()

//Get all clients
router.get('/', getClients)

//Get single clients
router.get('/:id', getSingleClient)

//Post single clients
router.post('/', createVeterinary)

//DELTE single clients
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a client'})
})

//Update single clients
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a client'})
})


//router.get('/', () => {})

module.exports = router