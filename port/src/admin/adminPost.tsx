import {useAuth} from './useAuth'
import './AdminPost.css'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
function AdminPost(){
    const navigate = useNavigate()
    const {isAdmin} = useAuth()
    //const [imageFile, setImage] = useState<File | null>(null)
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
            settheSubject(''); setMsg(''); setPreviewUrl('')
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
    /*
    function handleImage(e: React.ChangeEvent<HTMLInputElement>){
        const file = e.target.files?.[0]
        if(!file){
            return
        }
        setImage(file)
        setPreviewUrl(URL.createObjectURL(file))
    }
         <label>Image</label>
         <input type="file" accept="image/*" onChange={handleImage} />
         {previewUrl && (<div className="image-preview">
                <img src={previewUrl} alt="Preview"/></div>)}
        */
    return(<>
        <div className = "BlogPost">
        <main>
            <form className ="Post" onSubmit = {handleBlog}>
            <h3>Make Post</h3>
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
