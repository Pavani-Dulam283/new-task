
import React, { useEffect,useState } from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Edit=()=>{
    
        const {id}=useParams();
        const[data,setdata]=useState([])
        const navigate=useNavigate()
        useEffect(()=>{
            axios.get("http://127.0.0.1:8000/pro/per/"+id+"/").then(res=>setdata(res.data)).catch(err=>console.log(err))
    
        },[])

        function handleSubmit(e){
            e.preventDefault()
            axios.put("http://127.0.0.1:8000/pro/person/"+id+"/",data).then(res=>{
                alert("data added successfully")
                navigate("/")
            })
    
        }
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label>serialNo:</label>
                    <input type="text" className="form-control" value={data.serialNo} onChange={e=>setdata({...data,serialNo:e.target.value})}></input>
                </div>
                <div>
                    <label>FirstName:</label>
                    <input type="text" className="form-control" value={data.FirstName} onChange={e=>setdata({...data,FirstName:e.target.value})}></input>
                </div>
                <div>
                    <label>LastName:</label>
                    <input type="text" className="form-control"  value={data.LastName}onChange={e=>setdata({...data,LastName:e.target.value})}></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" className="form-control" value={data.Email} onChange={e=>setdata({...data,Email:e.target.value})}></input>
                </div>
                <div>
                    <label>Course:</label>
                    <input type="text" className="form-control" value={data.Course} onChange={e=>setdata({...data,Course:e.target.value})}></input>
                </div>
                <br></br>
                <div>
                     <button className="btn btn-info">update</button>
                </div>
                </form>

        )


}
export default Edit;
