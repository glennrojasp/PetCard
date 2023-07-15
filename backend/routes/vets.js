const express = require('express')

const router = express.Router()

//Get all clients
router.get('/', (req, res) => {
    res.json({mssg: 'GET all clients'})
})

//Get single clients
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single client'})
})

//Post single clients
router.post('/', (req, res) => {
    //req.body
    res.json({mssg: 'POST a new client'})
})

//DELTE single clients
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a client'})
})

//Update single clients
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a client'})
})


router.get('/', () => {})

module.exports = router