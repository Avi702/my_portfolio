import {useState, useEffect} from 'react'

export function useAuth(){
    const [isAdmin, setAdmin] = useState<boolean>(
        !!localStorage.getItem('token')
        
    )


useEffect(()=>{
    function check(){
        setAdmin(!!localStorage.getItem('token'))
    }
    window.addEventListener('storage',check)
    return ()=> window.removeEventListener('storage',check)},[])
function logout(){
    localStorage.removeItem('token')
    setAdmin(false)
}
return {isAdmin, logout}
}