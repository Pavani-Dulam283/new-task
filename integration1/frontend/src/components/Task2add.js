import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Task2add()
{
    const[inputdata,setinput]=useState({id:"",name:"",email:"",body:""})
    const navigate=useNavigate()
    function handlesubmit(e){
        e.preventDefault()
        axios.post("http://localhost:3000/users",inputdata).then(res=>{
            alert("data added successfully")
            navigate("/task2")
        }).catch(err=>console.log(err))

    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handlesubmit}>
                <div>
                    <label>id:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,id:e.target.value})}></input>
                </div>
                <div>
                    <label>name:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,name:e.target.value})}></input>
                </div>
                <div>
                    <label>email:</label>
                    <input type="email" className="form-control" onChange={e=>setinput({...inputdata,email:e.target.value})}></input>
                </div>
                <div>
                    <label>body:</label>
                    <input type="text" className="form-control" onChange={e=>setinput({...inputdata,body:e.target.value})}></input>
                </div><br></br>
                <div>
                     <button className="btn btn-info">submit</button>
                </div>
                </form>
               

            </div>
            

        </div>

    )
}
export default Task2add;