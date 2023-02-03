const jwt = require('jsonwebtoken')
const logged = (req,res,next) => {
    try{

        if(req.user){
            next()
        }    
        else{
            var alert = {
                status: "danger",
                message: "Zaloguj się"
            }
            
            res.cookie('alert', alert)
                    .redirect('/users/login')
        }
        
        // const token = req.cookies.token
        // const decode = jwt.verify(token, 'kodSzyfrujacy')
        
    }catch (err){
        console.log(err)
        res.render('unauthorized',{user:req.user});
    }
}

module.exports = logged