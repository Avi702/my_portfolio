import BlogCard from './BlogCard'
import './BlogList.css'

interface Post {
    id: number
    date: string
    image: string
    subject: string
    message: string
}
function BlogList({ posts } : {posts:Post[]}){
    return(<div className = 'alist'>
    {posts.map(post => 
    <BlogCard key ={post.id} 
    image = {post.image}
    date = {post.date}
    subject = {post.subject}
    message = {post.message}/>)}
    </div>)
}

export default BlogList;