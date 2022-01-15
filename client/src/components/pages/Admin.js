
import React, { useState, useEffect } from "react";
import '../../App.css';
import Axios from "axios"
import Footer from '../Footer';

import { Link } from "react-router-dom";




export default function Admin(){
  const [users, setUser] = useState([]);
  const url="http://localhost:5000/api/notes/addnote"
  const [data, setdata] = useState({
    name:"",
    link:""
  })
  const loadUsers = async () => {
    const result = await Axios.get("http://localhost:5000/api/notes/fetchallnotes");
    setUser(result.data.reverse());
  };
  
  const deleteUser = async id => {
    await Axios.delete(`http://localhost:5000/api/notes/deletenote/${id}`);
    window.location.reload();
    loadUsers();
  };
  
  
  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      name:data.name,
      link:data.link
    }).then(res=>{
      console.log(res.data)
      setdata({name: "", link: ""})
      window.location.reload();
    })
  }
  function handleClick(e){
    const newdata={...data}
    newdata[e.target.name]=e.target.value
    setdata(newdata)
   
    loadUsers();
  }

  useEffect(() => {
    loadUsers();
  }, []);
  
  return (
    <>
    <div>
      <div className="adminpage">
      <form onSubmit={(e)=>submit(e)}>
        <h2>Hi Rachit, paste youtube video link here</h2>
        <input type="text" name='name' onChange={(e)=>handleClick(e)} value={data.name} placeholder="Name of the video"/>
        <input type="link" name='link'onChange={(e)=>handleClick(e)} value={data.link} placeholder="Youtube link"/>
        <button    type="submit">Submit</button>
        </form>
    </div>
    </div>
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Link</th>
             
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.link}</td>
               
                <td>
                 
                  
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer></Footer>
</>
  )}

  



