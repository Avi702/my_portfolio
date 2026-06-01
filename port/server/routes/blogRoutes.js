import express from 'express'
import { Resend } from 'resend'
import dotenv from 'dotenv'
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
router.get('/blogs', (req,res)=>{

})

export default router