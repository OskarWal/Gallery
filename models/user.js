const mongoose = require('mongoose');



const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    login: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    isSuper: {
        type: Boolean,
        default: false
    }
})


const User = mongoose.model('User', UserSchema)

module.exports = User