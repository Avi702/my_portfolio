import express from 'express'
import dotenv from 'dotenv'
import db from '../db.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
dotenv.config()
const router = express.Router()

//authentication
router.post("/api/admin/adminLogin",(req,res)=>{
    const {username,password} = req.body
    try{
        const getAdmin = db.prepare(`SELECT * FROM admin WHERE username = ?`)
        const admin = getAdmin.get(username)
        if(!admin){
            return res.status(404).send({message:'User not found'})
        }
        const passwordIsValid = bcrypt.compareSync(password,admin.password_hash)
        if(!passwordIsValid){
            return res.status(401).send({message: 'Password is incorrect/invalid'})
        }
        const token = jwt.sign({id:admin.id},process.env.JWT_SECRET_KEY,
            {expiresIn:'24h'}
        )
        res.json({token})
    }catch(err){
        console.log(err.message)
        res.sendStatus(503)
    }
})

export default router