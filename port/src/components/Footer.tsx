import './Footer.css'
import {useAuth} from '../admin/useAuth'
function Footer(){
    const {isAdmin,logout} = useAuth()
    return (
    <>
    <footer>
        <div className="info">
        <p>Contact Me</p>
        <p><a href="https://www.linkedin.com/in/avneetaurora/">LinkedIn</a></p>
        <p><a href="https://www.github.com/avi702">Github</a></p>
        <p>Email: avneet.sehgal72@gmail.com</p>
        </div>

        {!isAdmin && <div><button><a href = "./admin/AdminLogin">Admin Log In</a></button></div>}
        {isAdmin && <div><button onClick = {logout} >Log Out</button></div>}
    </footer>
    
    </>)
}

export default Footer