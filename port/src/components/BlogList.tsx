import BlogCard from './BlogCard'
import './BlogList.css'
interface Post {
    id: number
    created_at: number
    image: string
    subject: string
    message: string
    likes: number
}
function BlogList({ posts } : {posts:Post[]}){
    return(<div className = 'alist'>
    {posts.map(post => 
    <BlogCard key ={post.id} 
    id = {post.id}
    image = {post.image}
    date = {new Date(post.created_at * 1000).toLocaleDateString()}
    subject = {post.subject}
    message = {post.message}
    likes = {post.likes}/>)}
    </div>)
}

export default BlogList;