import {useAuth} from './useAuth'
function AdminPost(){
    const isAdmin = useAuth()
    return(<>
        <div className = "BlogPost">
        <header>
            <h1>Make a Post</h1>
        </header>
        <main>
            <form className ="Post">
            <h3>Contact Form</h3>
            <p>Questions or want to reach out? Feel free to contact me through this form!</p>
            <p>Name</p>
            <input type="text" placeholder='John Doe' required></input>
            <p>Email</p>
            <input type="email" placeholder='Email' required></input>
            <p>Subject</p>
            <input type="text" placeholder='Subject' required></input>
            <label>Message</label>
            <textarea placeholder = 'Message' rows={15} cols={80} required></textarea>
            <button type="submit">Send</button>
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