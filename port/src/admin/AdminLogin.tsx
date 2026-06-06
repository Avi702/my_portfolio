import {useState} from 'react'
import './AdminLogin.css'
import {API_URL} from '../api'
function AdminLogin(){
    const [username,setUserName] = useState('')
    const [password,setPassword] = useState('')
    async function handleLogin(e : React.FormEvent){
        e.preventDefault()
        const res = await fetch(`${API_URL}/api/admin/adminLogin`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({username,password})
        })
        if(res.ok){
            const {token} = await res.json()
            localStorage.setItem('token',token)
            alert('Logged in!')
            window.location.href = '/'
        }
        else{
            alert('Incorrect username or password')
            setUserName(''); setPassword('')
        }
    }
    return(<>
        <div className = "Login-Form">
        <main>
            <form className ="adminLogin" onSubmit = {handleLogin}>
            <h3>Admin Login</h3>
            <p>Username</p>
            <input type="text" autoComplete = "username" placeholder='Username' value = {username} onChange={e => setUserName(e.target.value)} required></input>
            <label htmlFor = 'password'>Password</label>
            <input id = 'password' autoComplete = "current-password" placeholder = 'Password' type = 'password' value = {password} onChange={e => setPassword(e.target.value)} required></input>
            <button type="submit">Submit</button>
            </form>
        </main>
        </div>
        </>)
}
export default AdminLogin