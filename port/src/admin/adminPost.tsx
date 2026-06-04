import {useAuth} from './useAuth'
import './AdminPost.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function AdminPost(){
    const navigate = useNavigate()
    const {isAdmin} = useAuth()
    const [imageFile, setImage] = useState<File | null>(null)
    const [thesubject, settheSubject] = useState('')
    const [msg, setMsg] = useState('')
    const [previewUrl, setPreviewUrl] = useState<string>('')
    async function handleBlog(e: React.FormEvent){
        e.preventDefault()
        /*
        const formData = new FormData()
        formData.append('subject', thesubject)
        formData.append('message',msg)
        if(imageFile){
            formData.append('image',imageFile)
        }
        */
        const res = await fetch('http://localhost:8000/api/admin/adminBlogPost',{
            method: 'POST',
            headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({thesubject,msg}),
        })
        if(res.ok){
            alert('Sent!')
            if(previewUrl){ 
                URL.revokeObjectURL(previewUrl)
            }     
            setImage(null); settheSubject(''); setMsg(''); setPreviewUrl('')
            navigate('/Blog',{replace: true})
        }else{
            alert('Failed')
        }
    }
    useEffect(()=>{
        return()=>{
            if(previewUrl){ 
                URL.revokeObjectURL(previewUrl)
            }     
        }
    },[])
    function handleImage(e: React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0]
        if(!file){
            return
        }
        setImage(file)
        setPreviewUrl(URL.createObjectURL(file))
    }
    return(<>
        <div className = "BlogPost">
        <main>
            <form className ="Post" onSubmit = {handleBlog}>
            <h3>Make Post</h3>
            <label>Image</label>
            <input type="file" accept="image/*" onChange={handleImage} />
            {previewUrl && (<div className="image-preview">
                <img src={previewUrl} alt="Preview"/></div>)}
            <p>Subject</p>
            <input type="text" placeholder='Subject' value = {thesubject} onChange={e => settheSubject(e.target.value)} required></input>
            <label>Message</label>
            <textarea placeholder = 'Message' rows={15} cols={80} value = {msg} onChange={e => setMsg(e.target.value)} required></textarea>
            {isAdmin &&<button type="submit">Send</button>}
            </form>
        </main>
        </div>
        </>
    )
}
export default AdminPost

/*
import { useState } from 'react'
function contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    async function handleSubmit(e: React.FormEvent){
        e.preventDefault()
        const res = await fetch('http://localhost:8000/api/contact',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, subject, message}),
        })
        if(res.ok){
            alert('Sent!')
            setName(''); setEmail(''); setSubject(''); setMessage('')
        }else{
            alert('Failed')
        }
    }
    return(
        <>
        <div className = "contact-page">
        <header>
            <h1>Contact Me</h1>
        </header>
        <main>
            <form className ="Contact-Form" onSubmit ={handleSubmit}>
            <h3>Contact Form</h3>
            <p>Questions or want to reach out? Feel free to contact me through this form!</p>
            <p>Name</p>
            <input type="text" placeholder='John Doe' value={name} onChange={e => setName(e.target.value)} required></input>
            <p>Email</p>
            <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required></input>
            <p>Subject</p>
            <input type="text" placeholder='Subject' value={subject} onChange={e => setSubject(e.target.value)} required></input>
            <label>Message</label>
            <textarea placeholder = 'Message' rows={15} cols={80} value = {message} onChange = {e=>setMessage(e.target.value)} required></textarea>
            <button type="submit">Send</button>
            </form>
        </main>
        </div>
        </>
    )
}
export default contact
*/