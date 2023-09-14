import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
// import { BrowserRouter,Link } from "react-router-dom";
const Task2=()=>{
    const[columns,setcolumns]=useState([])
    const[records,setrecords]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/users").then(res=>{
            setcolumns(Object.keys(res.data[0]))
            setrecords(res.data)
            // console.log(Object.keys(res.data[0]))
        })

    },[])
    return(
        <div className="container mt-4">
            <div className="text-end">
                <Link to="/dataadd" className="btn btn-primary">Add data</Link>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((item,k)=>(
                            <th key={k}>{item}</th>
                         ))}
                    <th>Action</th>

                    </tr>

                </thead>
                <tbody>
                    
                    {records.map((item,k)=>(
                        <tr key={k}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.body}</td>
                            <td>
                                <Link to={`/updatedata/${item.id}`} className="btn btn-success">update</Link><br></br><br></br>
                                <Link to="/deledata"  className="btn btn-danger">delete</Link>
                            </td>

                        </tr>

                    ))}
                    

                </tbody>

            </table>

        </div>

    );

};
export default Task2;

