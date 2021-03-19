const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,       // username type
        required: true,    // all users must have a username
        unique: true,      // must be unique username
        time: true,         // removes extra ws
        minLength: 5        // must be at least 5 characters long
    },   
    password: {
        type: String,
        required: true,
        time: true,
        minLength: 8
    },
    name: {
        type: String,
        time: true,
        maxLength: 50,
    },
    address1: {
        type: String,
        time: true,
        maxLength: 50
    },
    address2: {
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

const User = mongoose.model('User', userSchema)

module.exports = User