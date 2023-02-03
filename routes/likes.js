const express = require('express')
const router = express.Router();
var like_controller = require('../controllers/likeController');
var authenticate = require('../middleware/authenticate');
const logged = require('../middleware/logged');


router.get('/list',logged, like_controller.like_user_list_get);

router.post('/add', logged, like_controller.like_add_post);

router.post('/delete', logged, like_controller.like_delete_post);

console.log("Likes Router READY");
module.exports = router;