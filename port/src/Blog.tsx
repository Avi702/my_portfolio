import './Blog.css'
import {useEffect, useState} from 'react'
import {useAuth} from './admin/useAuth'
import BlogList from './components/BlogList'
import {Link} from 'react-router-dom'
import {prefetchBlogs} from './blogCache'

function Blog(){
    const [posts, setPosts] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    async function getData(){
        // Waits for function prefetchBlogs written in a seperate file
        const data = await prefetchBlogs()
        setPosts(data)
        setLoading(false)
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
            {loading ?(<p>Loading, may take 10-20sec...</p>) : posts.length === 0 ?(
            <p>No posts yet!</p>):(
            <BlogList posts= {posts}/>
            )}
            {isAdmin && <Link to="/admin/AdminPost"><button>Create Post</button></Link>}
        </main>
    </div>
    )
}

export default Blog