require('dotenv').config()
const { Resend } = require('resend');
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000
const resend = new Resend(process.env.RESEND_API_KEY)
app.use(cors())
app.use(express.json())

app.post('/api/contact', async (req,res)=>{
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
app.listen(PORT, ()=>{
    console.log(`Server has started on ${PORT}`)
})