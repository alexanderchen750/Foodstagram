const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const SECRET = process.env.SECRET

const reqJwt = async (req, res, next) => {
    const { authorization } = req.headers
    console.log(authorization)
    if(!authorization){
        return res.status(401).json({error: 'JWT Required'})
    }
    const token = authorization.split(' ')[1]
    try{
        const {_id} = jwt.verify(token, SECRET)
        req.user = await User.findOne({_id}).select('_id')
        next()
    }catch(error){
        console.log(error)
        res.status(401).json({error: 'Not Authorized'})
    }
}

module.exports = reqJwt