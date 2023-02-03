const express = require('express')
const router = express.Router();

var picture_controller = require('../controllers/pictureController');


var authenticate = require('../middleware/authenticate');
const supercheck = require('../middleware/supercheck');

//router.get('/', picture_controller.index);

//router.get('/list', authenticate, picture_controller.picture_list);
router.get('/list', picture_controller.picture_list);
router.get('/info/:id', picture_controller.picture_info_get);

router.post('/search', picture_controller.picture_search_post);

router.get('/list/edit', supercheck, picture_controller.picture_edit_list_get); 
router.get('/edit/:id', supercheck, picture_controller.picture_edit_get);
router.post('/edit/:id', supercheck, picture_controller.picture_edit_post);

router.post('/delete/:id', supercheck, picture_controller.picture_delete_post);

router.get('/add', supercheck,  picture_controller.picture_add_get);
router.post('/add', supercheck, picture_controller.picture_add_post);

console.log("Picture Router READY");
module.exports = router;