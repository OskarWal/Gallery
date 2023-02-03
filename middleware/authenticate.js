const jwt = require('jsonwebtoken')
const authenticate = (req,res,next) => {
    try{

        const token = req.cookies.token
        const decode = jwt.verify(token, 'kodSzyfrujacy')

        req.user = decode
        next()
    }catch (err){
        req.user = undefined
        next()

    }
}

module.exports = authenticate