var Like = require('../models/like');
var User = require('../models/user');
var Picture = require('../models/picture');

exports.like_add_post = function(req, res){

    const isAdded = async () => {
        try{
            if(await Like.findOne({id_user: req.user.id, id_picture: req.body.id_picture}).exec())
                return true;
        }catch(err){
            console.log(err);
            return false;
        }
        return false;
    }

    const isTrueData = async () => {
        try{
            if(await User.findById(req.user.id) && await Picture.findById(req.body.id_picture))
                return true;
        }catch(err){
            console.log(err);
            return false;
        }
        
        return false;
    }
    
    const addLike = async () => {
        if(await isTrueData() && (!await isAdded())){
            try{
                const like = new Like({
                    id_user: req.user.id,
                    id_picture: req.body.id_picture
                });
    
                like.save();
                await Picture.findByIdAndUpdate(req.body.id_picture, {$inc : {'like_count' : 1 }})

                var alert = {
                    status: "success",
                    message: "Dodano do polubionych"
                }
                
                res.cookie('alert', alert)
                        .redirect('back')

            }catch(error){
                console.log(error);
            }
        }else{
            var alert = {
                status: "danger",
                message: "Zdjęcie znajduję się już w polubionych lub nie istnieje"
            }
            res.cookie('alert', alert)
                .redirect('back');
        }
        
    }

    addLike();
}


exports.like_delete_post = function(req, res){


    
    const deleteLike = async () => {
        var alert = {
            status: "",
            message: ""
        }
            try{
                if(await Like.findOneAndDelete({id_user: req.user.id, id_picture: req.body.id_picture})){
                    await Picture.findByIdAndUpdate(req.body.id_picture, {$inc : {'like_count' : -1 }})

                    alert.status = "success"
                    alert.message = "Usunięto z polubionych zdjęć"

                    res.cookie('alert', alert)
                            .redirect('back')
                }else {
                    alert.status = "danger"
                    alert.message = "Nie ma takiego zdjęcia w polubionych"

                    res.cookie('alert', alert)
                        .redirect('back');
                }
            }catch(error){
                console.log(error);

                alert.status = "danger"
                    alert.message = "Błąd"

                res.cookie('alert', alert)
                    .redirect('back');
            }
        
    }

    deleteLike();
}





exports.like_user_list_get = function(req, res){


    
    const findLikes = async () => {
        var alert = new Object();
        
            try{
                const likes_list = await Like.find({id_user: req.user.id}).lean()
                let pictures_id =  likes_list.map(a => a.id_picture);

                const picture_liked_list = await Picture.find().where('_id').in(pictures_id).sort({date:-1}).lean()

                alert = req.cookies.alert
                res.clearCookie('alert')
                    .render('list/user_likes',{title: 'Galeria', items: picture_liked_list, user: req.user, alert: alert});

            }catch(error){
                console.log(error);
                alert.status = "danger"
                    alert.message = "Błąd listy polubionych"
                res.cookie('alert', alert)
                    .redirect('/pictures/list');
            }
        
    }

    findLikes();
}


console.log("likeController READY")