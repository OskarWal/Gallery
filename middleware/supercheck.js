const jwt = require('jsonwebtoken')
const supercheck = (req,res,next) => {
    try{

        if(req.user && req.user.isSuper)
            next()
        else
            res.render('unauthorized',{user:req.user});
        
    }catch (err){
        console.log(err)
        res.render('unauthorized',{user:req.user});
    }
}

module.exports = supercheck