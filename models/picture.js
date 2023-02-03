const { kStringMaxLength } = require('buffer');
const mongoose = require('mongoose');



const PictureSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    file_name: {
        type: String,
        required: true,
    },
    path: {
        type: String,
        default: '../images'
    },
    like_count: {
        type: Number,
        default: 0,
        min: 0
    },
    comment_count: {
        type: Number,
        default: 0,
        min: 0
    }
})



const Picture = mongoose.model('Picture', PictureSchema)

module.exports = Picture