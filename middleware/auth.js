const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next){

    const token = req.header('x-auth-token');

    if(!token){
        return res.status(401).json({ msg : 'Token not present, authorization denied' });
    }

    try{
        const decode = jwt.decode(token, config.get('jwtsecret'));
        req.user = decode.user;
        next()
    }catch(err){
        res.status(401).json({ msg : 'Invalid token' });
    }
}