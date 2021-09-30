const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        max: 64,
        unique: true,
        index: true,
        lowerCase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        max: 128
    }, 
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    }, 
    profile: {
        type: String,
        required: true,
    },
    hashed_password: {
        type: string,
        required: true,
    },
    salt: Number,
    about: {
        type: String,
    },
    role: {
        type: Number,
        trim: true
    },
    photo: {
        data: buffer,
        contentType: String,
    },
    resetPasswordLink: {
        type: String,
        default: ''
    }

}, {timestamp: true})

module.exports = mongoose.model('User', userSchema);