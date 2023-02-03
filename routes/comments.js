const express = require('express')
const router = express.Router();
var comment_controller = require('../controllers/commentController');

const logged = require('../middleware/logged');

router.post('/add/:id', logged, comment_controller.comment_add_post);

console.log("Comments Router READY");
module.exports = router;