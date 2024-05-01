import { useContext } from "react"
import userContext from "../context/UserContext"

function Profile() {
    const {user} = useContext(userContext)

console.log(user)
    if(user && user.email !="" && user.pass != "")
    return (<div>My Email: {user.email} and Password is {user.pass}</div>)
    else 
    return (<div>Please login to view profile</div>)
    
 
}

export default Profile
