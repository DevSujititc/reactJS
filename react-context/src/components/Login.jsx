import { useContext, useState } from "react";
import UserContext from "../context/UserContext";


function Login(){

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
        
        setUser({email,pass})
    }
    return(
        <div>
            <div>

            <input type="text" className="" name="email" placeholder="Provide your email" value={email} 
            onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>

            <input type="password" className="" name="password" placeholder="Set your password" 
            value={pass} 
            onChange={(e)=>setPass(e.target.value)}
            />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login;