const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,       // username type
        required: true,    // all users must have a username
        unique: true,      // must be unique username
        time: true,         // removes extra ws
        minlength: 5        // must be at least 5 characters long
    },   
    password: {
        type: String,
        required: true,
        time: true,
        minlength: 8,
    },
}, {
    timestamps: true        // will create a timestamp of when the user is created
})

const User = mongoose.model('User', userSchema)

module.exports = User