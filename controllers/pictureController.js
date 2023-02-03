const { ObjectId } = require('mongodb');
var Picture = require('../models/picture');
var Comment = require('../models/comment');
const Like = require('../models/like');


exports.picture_list = function(req, res) {
    const getPictures = async () => {
        try{
            const pictures = await Picture.find().sort({date: -1}).lean()
            var alert = req.cookies.alert

            res.clearCookie('alert')
                .render('index',{items: pictures, user: req.user, alert: alert});
        }catch(error){
            console.log(error)
        }
    }

    getPictures()
};

exports.picture_edit_list_get = function(req, res) {

    const getPictures = async () => {
        try{
            const pictures = await Picture.find().sort({date: -1}).lean()

            var alert = req.cookies.alert
            res.clearCookie('alert')
                .render('edit_pictures_list',{title: 'Galeria', items: pictures, user: req.user, alert: alert});
        }catch(error){
            console.log(error)
        }
    }

    getPictures()
};
exports.picture_info_get = function(req, res) {

    var id = req.params.id;
    const getPictures = async () => {
        try{
            const picture = await Picture.findOne({_id:id}).lean()
            const comments = await Comment.find({ id_picture: id}).sort({date: -1}).lean()
            var isLiked = undefined
            if(req.user){
                 isLiked = await Like.findOne({id_picture: id, id_user:req.user.id }).lean()
            }
                

            var alert = req.cookies.alert
            res.clearCookie('alert')
                .render('info/info_picture', {item: picture, commentList: comments , user: req.user, alert: alert, isLiked: isLiked});
            
        }catch(error){
            console.log(error)
        }
    }

    getPictures();
};





exports.picture_edit_post = function(req, res) {

    var id = req.params.id;
    var alert = new Object();
    const updatePicture = async () => {
        try{
            const picture = await Picture.findByIdAndUpdate(id, req.body)

            alert.status = "success";
            alert.message = "Poprawnie edytowano zdjęcie";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
        }catch(error){
            alert.status = "danger";
            alert.message = "Błąd podczas edycji zdjęcia";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
            console.log(error)
        }
    }
    updatePicture();
}

exports.picture_edit_get = function(req, res) {

    var id = req.params.id;
    const getPictures = async () => {
        try{
            const picture = await Picture.findOne({_id:id}).lean()
            var alert = req.cookies.alert
            res.clearCookie('alert')
                .render('edit_forms/edit_picture', {id:id ,item: picture, user: req.user, alert:alert});
        }catch(error){
            console.log(error)
        }
    }
    getPictures();
}


exports.picture_delete_post = function(req, res) {

    id = req.params.id;
    var alert = new Object();
    const deletePicture = async () => {
        try{
            await Picture.findByIdAndDelete(id);
            alert.status = "success";
            alert.message = "Poprawnie usunięto zdjęcie";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
        }catch(error){
            alert.status = "danger";
            alert.message = "Błąd podczas usuwania zdjęcia";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
            console.log(error);
        }
    }

    deletePicture();
};



exports.picture_add_get = function(req, res) {
    var alert = req.cookies.alert
    res.clearCookie('alert')
        .render('add_forms/add_picture', {user: req.user, alert:alert});
};


exports.picture_add_post = function(req, res) {

    var alert = new Object();
    var data = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        file_name: req.body.file_name,
        size: req.body.size
    };
        
    
    const addPicture = async (pictureData) => {
        try{
            const picture = new Picture(pictureData);
            picture.save();

            alert.status = "success";
            alert.message = "Poprawnie dodano zdjęcie";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
        }catch(error){
            alert.status = "danger";
            alert.message = "Błąd podczas dodawania zdjęcia";
            res.cookie('alert', alert)
                .redirect("/pictures/list")
            console.log(error);
        }
    }

    addPicture(data)
};



exports.picture_search_post = function(req, res) {
var alert = new Object();
    const getPictures = async () => {
        try{
            const pictures = await Picture.find({title:{$regex: new RegExp(req.body.searchParam, 'i')}}).sort({date: -1}).lean()
            alert.status = "secondary";
            alert.message = "Wyniki wyszukiwania dla: " + req.body.searchParam;
            res.render('index',{items: pictures, user: req.user, alert: alert});
        }catch(error){
            console.log(error)
        }
    }

    getPictures()
};


console.log("pictureController READY")