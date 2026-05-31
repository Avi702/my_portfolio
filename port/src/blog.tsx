import './blog.css'

function Blog(){
    return (<>
    <div className = "blog-page">
        <header>
            <h1>Blog Posts</h1>
            <p>See what I am up to!</p>
        </header>
        <main>
            <div className="blogs">
                <div className="posts"></div>
            </div>
        </main>
    </div>
    </>)
}

export default Blog