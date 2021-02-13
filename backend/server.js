const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.port || 5500

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection
try{
    connection.once('open', () => {
        console.log(`MongoDB connection successful!`)
    })
}
catch{
    console.log(`error`)
}


const usersRouter = require('./routes/users')
app.use('/users', usersRouter)

app.listen(port, () => {
    console.log(`Listening at port: ${port}`)
})