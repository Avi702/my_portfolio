import './BlogCard.css'
interface BlogCardProps{
    date: string
    image: string
    subject: string
    message: string
}
function BlogCard({date, image, subject, message}: BlogCardProps){
    return(<div className = "card">
                {image && <div className="image">
                    <img src={image} />
                </div>}
                <div className="description">
                    <small>{date}</small>
                    <h3>{subject}</h3>
                    <p>{message}</p>
                </div>
            </div>)
}

export default BlogCard;