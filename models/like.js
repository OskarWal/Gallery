const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({
    id_user: {
        type: String,
    },
    id_picture: {
        type: String,
    }
})


const Like = mongoose.model('Like', LikeSchema);

module.exports = Like