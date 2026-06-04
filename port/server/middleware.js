import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config()
function authMiddleware(req,res,next){
    const token = req.headers.authorization?.replace('Bearer ', '')
    if(!token){
        return res.status(401).json({message:'No token provided'})
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY,(err, decoded)=> {
        if(err) return res.status(401).json({message:'Invalid Token'})
        req.adminID = decoded.id
        next()
    })

}

export default authMiddleware