const Veterinary = require('../models/veterinaryModel');
const mongoose = require('mongoose')

//get all clients

const getClients = async(req, res)=> {
    const vetClients = await Veterinary.find({}).sort({createdAt: -1})

    res.status(200).json(vetClients);
}

//get single vet

const getSingleClient = async(req, res)=> {
    const {id} = req.params;

    const vetClient = await Veterinary.findById(id);

    if(!vetClient){
       return res.status(404).json({error: 'No such client'});
    }

    res.status(200).json(vetClient);
}

//get single client

//create new vet
const createVeterinary = async( req, res) => {
    const {name, clients} = req.body;

    //add doc to db
    try{
        const veterinary = await Veterinary.create({name, clients});
        res.status(200).json(veterinary);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

//update new vet

// delete vet

//add new client

//update client

//delete client

//add new pet

//update pet

//delete pet

// add apoinment

// delete apoinment

// update apoinment

// add vacinne

// update vaccine

// delete vaccine

// add medicine

//update medicine

// delete medicina

// add operation

// update operation

// delete operation


module.exports = {
    createVeterinary,
    getClients,
    getSingleClient
}