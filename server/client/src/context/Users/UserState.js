import React,{useState,useEffect} from "react";
import UserContext from "./UserContext";

const UserState=(props)=>{
    const host = "https://ronnin.herokuapp.com"
  const notesInitial = []
  const [user, setUser] = useState(notesInitial)

  // Get all Notes
  const getUser = async () => {
    // API Call 
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json() 
    setUser(json)
  }
    return(
        <UserContext.Provider value={user,getUser}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState;
