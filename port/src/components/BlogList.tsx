import BlogCard from './BlogCard'
import './BlogList.css'
interface Post {
    id: number
    created_at: number
    image: string
    subject: string
    message: string
}
function BlogList({ posts } : {posts:Post[]}){
    return(<div className = 'alist'>
    {posts.map(post => 
    <BlogCard key ={post.id} 
    image = {post.image}
    date = {new Date(post.created_at * 1000).toLocaleDateString()}
    subject = {post.subject}
    message = {post.message}/>)}
    </div>)
}

export default BlogList;