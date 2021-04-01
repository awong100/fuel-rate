const mongoose = require('mongoose')

const Schema = mongoose.Schema

const quoteSchema = new Schema({
    id: {
        type: String,      
        required: true,      
        time: true,         
        minLength: 1        
    },   
    date: {
        type: String,
        required: true,
        time: true,
        minLength: 4
    },
    price: {
        type: Number,
        time: true,
        minLength: 1
    },
    gallons: {
        type: String,
        time: true,
        minLength: 1
    },
    total: {
        type: String,
        time: true,
        minLength: 1
    },
    address: {
        type: String,
        time: true,
        maxLength: 50
    },
    city: {
        type: String,
        time: true,
        maxLength: 50
    },
    state: {
        type: String,
        time: true,
        maxLength: 3
    },
    zip: {
        type: String,
        time: true,
        minLength: 5,
        maxLength: 9
    }
}, {
    timestamps: true        // will create a timestamp of when the user is created
})

const Quote = mongoose.model('Quote', quoteSchema)

module.exports = Quote