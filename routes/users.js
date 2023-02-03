const express = require('express')
const router = express.Router();

var user_controller = require('../controllers/userController');
const logged = require('../middleware/logged');
const supercheck = require('../middleware/supercheck');
const unauth = require('../middleware/unauth');




router.get('/list', supercheck, user_controller.users_list);


router.get('/edit/:id', supercheck, user_controller.user_edit_get);
router.post('/edit/:id', supercheck, user_controller.user_edit_post);

router.post('/delete', supercheck, user_controller.user_delete_post);

router.get('/add', unauth, user_controller.user_add_get);
router.post('/add', unauth, user_controller.user_add_post);

router.get('/addsuper', supercheck, user_controller.user_addsuper_get);
router.post('/addsuper', supercheck, user_controller.user_addsuper_post);

router.get('/login', unauth, user_controller.user_login_get);
router.post('/login', unauth, user_controller.user_login_post);

router.get('/logout', logged, user_controller.user_logout_get);

console.log("Users Router READY");
module.exports = router;

