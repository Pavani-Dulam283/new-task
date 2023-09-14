import React, { useEffect,useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Task2edit=()=>{
    const {id}=useParams();
    const[data,setdata]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:3000/users/"+id).then(res=>setdata(res.data)).catch(err=>console.log(err))

    },[])
    function handleSubmit(e){
        e.preventDefault()
        axios.put("http://localhost:3000/users/"+id,data).then(res=>{
            alert("data added successfully")
            navigate("/task2")
        })

    }
    return(
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
            <div className="w-50 border bg-light p-5">
                <form onSubmit={handleSubmit}>
                <div>
                    <label>id:</label>
                    <input type="text" className="form-control" value={data.id} disabled></input>
                </div>
                <div>
                    <label>name:</label>
                    <input type="text" className="form-control" value={data.name} onChange={e=>setdata({...data,name:e.target.value})}></input>
                </div>
                <div>
                    <label>email:</label>
                    <input type="email" className="form-control" value={data.email} onChange={e=>setdata({...data,email:e.target.value})}></input>
                </div>
                <div>
                    <label>body:</label>
                    <input type="text" className="form-control" value={data.body} onChange={e=>setdata({...data,body:e.target.value})} ></input>
                </div><br></br>
                <div>
                     <button className="btn btn-info">update</button>
                </div>
                </form>
               

            </div>
            

        </div>

    )
}
export default Task2edit;