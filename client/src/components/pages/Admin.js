import React,{useState} from 'react';
import '../../App.css';
import Axios from "axios"

export default function Admin(){
  const url="http://localhost:5000/addarticle"
  const [data, setdata] = useState({
    name:"",
    link:""
  })
  function submit(e) {
    e.preventDefault();
    Axios.post(url,{
      name:data.name,
    link:data.name
    }).then(res=>{
      console.log(res.data)
    })
  }
  function handleClick(e){
    const newdata={...data}
    newdata[e.target.name]=e.target.value
    setdata(newdata)
    console.log(newdata)
  }

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
</>
  )}

  



