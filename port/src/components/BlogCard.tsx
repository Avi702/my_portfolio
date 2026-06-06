import './BlogCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp} from '@fortawesome/free-regular-svg-icons'   
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import {useAuth} from '../admin/useAuth'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import {API_URL} from '../api'
interface BlogCardProps{
    id: number
    date: string
    image: string
    subject: string
    message: string
    likes: number
}
function BlogCard({id, date, image, subject, message, likes}: BlogCardProps){
    const {isAdmin} = useAuth()
    const [like, setLike] = useState(likes)
    async function handleLikes(){
        setLike(prev => prev + 1)
        const res = await fetch(`${API_URL}/api/${id}/BlogLikes`,{
            method:'PATCH'
        })
        if(res.ok){
            const {likes: newCount} = await res.json()
            setLike(newCount)
        }else{
            setLike(prev=>prev-1)
        }
    }
    return(<div className = "card">
                {image && <div className="image">
                    <img src={image} />
                </div>}
                <div className="description">
                    <small>{date}</small>
                    <h3>{subject}</h3>
                    <p>{message}</p>
                </div>
                <div className='icons'>
                <button onClick = {handleLikes}>
                <FontAwesomeIcon icon={faThumbsUp} className = 'like-icon'/>{like}
                </button>

                {isAdmin && <Link to ={`../admin/AdminEdit/${id}`}>
                    <FontAwesomeIcon icon={faPenToSquare} className = 'trash'/>
                    </Link>}
                </div>
            </div>
)}

export default BlogCard;