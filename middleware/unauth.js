const jwt = require('jsonwebtoken')
const unauth = (req,res,next) => {

    var alert = new Object();
    try{

        if(req.user && !req.user.isSuper){

            alert.status = "danger";
            alert.message = "Jesteś już zalogowany";
            res.cookie('alert', alert)
                .redirect('/pictures/list')
        }    
        else{
            next()
        }
        
    }catch (err){
        alert.status = "danger";
            alert.message = "Jesteś już zalogowany";
            res.cookie('alert', alert)
                .redirect('/pictures/list')
    }
}

module.exports = unauth