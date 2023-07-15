const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    race: {
        type: String,
        required: true
    },
    species: {
        type: String,
        required: true
    },

})

const ClientInformation = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pets: [PetSchema],
})

const VetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    clients: [ClientInformation],
}, { timestamps: true })

module.exports = mongoose.model('Veterinary', VetSchema)

// Veterinary.find()