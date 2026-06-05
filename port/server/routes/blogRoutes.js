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
    const insertPost = db.prepare(`INSERT INTO blogs(image,subject,message)
        VALUES(?, ?, ?)`).run(null,thesubject,msg)
    res.sendStatus(201)
    }catch(err){
        console.error('Insert failed:',err)
        res.status(500).json({error: 'Failed to create post'})
    }
})


router.get('/api/Blog', (req, res)=>{
    const getBlogs = db.prepare(`SELECT * FROM blogs ORDER BY created_at DESC`)
    const blogs = getBlogs.all()
    res.json(blogs)
})

router.patch('/api/:id/BlogLikes', (req,res)=>{
    const {id} = req.params
    const addLike = db.prepare(`UPDATE blogs SET likes = likes + 1 WHERE id = ?`).run(id)
    const updated = db.prepare(`SELECT likes FROM blogs WHERE id = ?`).get(id)
    res.json({likes: updated.likes})
})
router.delete('/api/admin/AdminDelete/:id', authMiddleware, (req,res)=>{
        const {id} = req.params
        const deletePost = db.prepare(`DELETE FROM blogs WHERE id = ?`).run(id)
        res.sendStatus(204)
})
router.get('/api/admin/AdminEdit/:id',(req,res)=>{
    const {id} = req.params
    const post = db.prepare(`SELECT * FROM blogs WHERE id = ?`).get(id)
    res.json(post)
})
router.put('/api/admin/AdminEdit/:id', authMiddleware, (req,res)=>{
    const {id} = req.params
    const {subject,message} = req.body
    db.prepare('UPDATE blogs SET subject = ?, message = ? WHERE id = ?').run(subject,message,id)
    const updatedPost = db.prepare(`SELECT * FROM blogs WHERE id = ?`).get(id)
    res.json(updatedPost)
})


export default router