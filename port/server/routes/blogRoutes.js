import express from 'express'
import { Resend } from 'resend'
import dotenv from 'dotenv'
import db from '../db.js'
import authMiddleware from '../middleware.js'
dotenv.config()
const router = express.Router()
//Contact Route
const resend = new Resend(process.env.RESEND_API_KEY)
router.post('/api/contact', async (req,res)=>{
    const {name, email, subject, message} = req.body
    console.log("Recieved message")
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'avneet.sehgal72@gmail.com',
        subject: subject,
        html: `<p><strong>${name}</strong> (${email}) says:</p><p>${message}</p>`
    })
    res.sendStatus(201)
})

//Blogs
router.post('/api/admin/adminBlogPost', authMiddleware, async (req,res)=>{
    try{
    const {thesubject,msg} = req.body
    await db.execute({sql:`INSERT INTO blogs(image,subject,message) VALUES(?, ?, ?)`,
        args:[null,thesubject,msg]})
    res.sendStatus(201)
    }catch(err){
        console.error('Insert failed:',err)
        res.status(500).json({error: 'Failed to create post'})
    }
})

//fetch all current posts from db
router.get('/api/Blog', async (req, res)=>{
    const result = await db.execute(`SELECT * FROM blogs ORDER BY created_at DESC`)
    res.json(result.rows)
})
//Add likes counter
router.patch('/api/:id/BlogLikes', async (req,res)=>{
    const {id} = req.params
    await db.execute({sql:`UPDATE blogs SET likes = likes + 1 WHERE id = ?`, args:[id]})
    const updated = await db.execute({sql:`SELECT likes FROM blogs WHERE id = ?`, args:[id]})
    res.json({likes: updated.rows[0].likes})
})
//Delete a given post
router.delete('/api/admin/AdminDelete/:id', authMiddleware, async (req,res)=>{
        const {id} = req.params
        await db.execute({sql:`DELETE FROM blogs WHERE id = ?`, args:[id]})
        res.sendStatus(204)
})

router.get('/api/admin/AdminEdit/:id', async (req,res)=>{
    const {id} = req.params
    const result = await db.execute({sql:`SELECT * FROM blogs WHERE id = ?`, args:[id]})
    res.json(result.rows[0])
})
router.put('/api/admin/AdminEdit/:id', authMiddleware, async (req,res)=>{
    const {id} = req.params
    const {subject,message} = req.body
    await db.execute({sql:'UPDATE blogs SET subject = ?, message = ? WHERE id = ?', args:[subject,message,id]})
    res.sendStatus(204)
})


export default router