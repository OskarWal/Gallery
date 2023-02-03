var Comment = require('../models/comment');
const Picture = require('../models/picture');
const User = require('../models/user');

exports.comment_add_post = function(req, res){

    var alert = new Object();
    
    const addComment = async () => {
        try{
            let user = await User.findById(req.user.id);
            
            const comment = new Comment({
                user: user.name + " " + user.surname,
                content: req.body.content,
                id_picture: req.body.id_picture,
                id_user: user._id
            });

            
            comment.save();
            await Picture.findByIdAndUpdate(comment.id_picture, {$inc : {'comment_count' : 1 }})

            alert.status = "success";
            alert.message = "Dodano komentarz";
            res.cookie('alert', alert)
                .redirect('/pictures/info/'+comment.id_picture)
        }catch(error){
            console.log(error);
            alert.status = "danger";
            alert.message = "Błąd podczas dodawania komentarza";
            res.cookie('alert', alert)
                .redirect('/pictures/info/'+comment.id_picture)
        }
    }

    addComment();
}


console.log("commentController READY")