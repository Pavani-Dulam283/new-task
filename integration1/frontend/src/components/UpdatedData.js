import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function UpdatedData(){
    const [data,setData]=useState({})
    const {id}=useParams()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/app/emp/"+id+"/").then(
        // response=>console.log(response.data)
        response=>setData(response.data)
    )
    },[])

    function dataUpdate(e){
        e.preventDefault()
        axios.put("http://127.0.0.1:8000/app/emp/"+id+"/",data).then(
            
            alert("Data updated successfully"),
            navigate("/")
        ).catch(error=>console.error())
    }

    return(
        <div className="container">
            <form onSubmit={dataUpdate}>
            <label>Product Id : </label>
                <input type="number" className="form-control w-50" value={data.product_id}
                disabled/>
                <label>Name : </label>
                <input type="text" className="form-control w-50" value={data.product_name} onChange={(e)=>{
                    setData({...data,product_name:e.target.value})
                }}/>
                <label>Price : </label>
                <input type="text" className="form-control w-50" value={data.product_price} onChange={(e)=>{
                    setData({...data,product_price:e.target.value})
                }}/>
                <label>Quantity : </label>
                <input type="number" className="form-control w-50" value={data.product_quantity} onChange={(e)=>{
                    setData({...data,product_quantity:e.target.value})
                }}/>
                <input type="text" className="form-control w-50" value={data.description} onChange={(e)=>{
                    setData({...data,description:e.target.value})
                }}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default UpdatedData;