import express from 'express'
import { Resend } from 'resend'
import cors from 'cors'
import blogRoutes from './routes/blogRoutes.js'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = 8000
const resend = new Resend(process.env.RESEND_API_KEY)
app.use(cors())
app.use(express.json())

app.use(blogRoutes)


app.listen(PORT, ()=>{
    console.log(`Server has started on ${PORT}`)
})