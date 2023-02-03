const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    user: {
        type: String,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    id_picture: {
        type: String,
    },
    id_user:{
        type: String
    }
    
})


const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment