import './blog.css'
import {useAuth} from './admin/useAuth'
import BlogList from './components/BlogList'
import {Link} from 'react-router-dom'
const fakePosts = [
  { id: 1, image: '/favicon.svg', date: '12/12/24', subject: 'Hello World', message: 'Hi, how are you?' },
  { id: 2, image: '/favicon.svg', date: '12/15/24', subject: 'Learning React', message: 'Props are kinda cool.' },
  { id: 3, image: '/favicon.svg', date: '12/20/24', subject: 'Backend basics', message: 'Express is a framework.' },
]

function Blog(){
    const {isAdmin} = useAuth()
    return (
    <div className = "blog-page">
        <header>
            <h1>Blog Posts</h1>
            <p>See what I am up to!</p>
        </header>
        <main>
            <BlogList posts= {fakePosts}/>
            {isAdmin && <Link to="/admin/adminPost"><button>Create Post</button></Link>}
        </main>
    </div>
    )
}

export default Blog