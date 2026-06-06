import './AdminEdit.css'
import {useAuth} from './useAuth'
import {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {API_URL} from '../api'

function AdminEdit(){
    const navigate = useNavigate()
    const {isAdmin} = useAuth()
    const {id} = useParams()
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
    useEffect(()=>{
        async function loadPost(){
            try{
                const res = await fetch(`${API_URL}/api/admin/AdminEdit/${id}`)
                if(res.ok){
                    const post = await res.json()
                    setSubject(post.subject)
                    setMessage(post.message)
                }
            }catch(err){
                console.error('Failed to load post:',err)
            }finally{
                setLoading(false)
            }
        }loadPost()
    },[id])
    ///api/admin/AdminEdit/:id
    async function handleEdit(){
        const res = await fetch(`${API_URL}/api/admin/AdminEdit/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({subject, message})
        })
        if(res.ok){
            setSubject('');setMessage('')
            navigate('/Blog',{replace: true})
        }else{
            alert('Failed')
        }
    }
    async function handleDelete(){
        const res = await fetch(`${API_URL}/api/admin/AdminDelete/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${localStorage.getItem('token')}`
            }
        })
        if(res.ok){
            setSubject('');setMessage('')
            navigate('/Blog',{replace: true})
        }else{
            alert('Failed')
        }
    }
    if(loading){
        return <p>Loading...</p>
    }
    return(<>
        <div className = "EditPost">
        <main>
            <form className ="Edit">
            <h3>Edit Post</h3>
            <p>Subject</p>
            <input type="text" placeholder='Subject' value = {subject}  onChange={e => setSubject(e.target.value)}required></input>
            <label>Message</label>
            <textarea placeholder = 'Message' rows={15} cols={80} value = {message} onChange={e=>setMessage(e.target.value)}required></textarea>
            {isAdmin &&<button type="button" onClick ={handleEdit}>Confirm Changes</button>}
            {isAdmin &&<button type="button" onClick = {handleDelete}>Delete Post</button>}
            </form>
        </main>
        </div>
        </>)
}

export default AdminEdit