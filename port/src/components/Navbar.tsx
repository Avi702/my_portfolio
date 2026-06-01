import './Navbar.css'
function Navbar() {
    return (<>
        <nav className ="navbar">
          <ul className = "nav-links">
            <li><a href ="/">Home</a></li>
            <li><a href= "/about">About</a></li>
            <li><a href = "/blog">Blogs</a></li>
            <li><a href="/portfolio">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
    </>)
}
export default Navbar
