require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const vetRoutes = require('./routes/vets')

//express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
// app.get('/', (req, res) => {
//     res.json({mssg: 'Welcome to the app'})
// })

app.use('/api/vets', vetRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        // listen for request
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })



