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

userSchema.virtual('password')
    .set(function(password) {
        // create a temporary password string
        this._password = password;
        //generate the salt
        this.salt = this.makeSalt()


        // encrypt the password
        this.hashedPassword = this.encryptPassword(password)
    })
    .get(function() {
        return this._password;
    })

userSchema.methods = {
    authenticate: function (plainText) {
        return this.encryptPassword(plainText)
    },

    encryptPassword: function(password) {
        if(!password) {
            return ''
        }
        try {
            return crypto.createHmac('sha256', this.salt)
            .update(password)
            .digest('hex');
        } catch(error) {
            return ''
        }
    },
    makeSalt: function () {
        return Math.round(new Date().valueOf() * Math.random()) + '';
    }
}

module.exports = mongoose.model('User', userSchema);