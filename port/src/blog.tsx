import './Blog.css'
import {useEffect, useState} from 'react'
import {useAuth} from './admin/useAuth'
import BlogList from './components/BlogList'
import {Link} from 'react-router-dom'
import {API_URL} from './api'

function Blog(){
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    async function getData(){
        try{
            const res = await fetch(`${API_URL}/api/Blog`)
            if(res.ok){
                const data = await res.json()
                setPosts(data)
            }
        }catch(err){
            console.error('Failed to fetch blogs')
            return
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        getData()
    },[])
    const {isAdmin} = useAuth()
    return (
    <div className = "blog-page">
        <header>
            <h1>Blog Posts</h1>
            <p>See what I am up to!</p>
        </header>
        <main>
            {loading ?(<p>Loading...</p>) : posts.length === 0 ?(
            <p>No posts yet!</p>):(
            <BlogList posts= {posts}/>
            )}
            {isAdmin && <Link to="/admin/AdminPost"><button>Create Post</button></Link>}
        </main>
    </div>
    )
}

export default Blog