import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Add(){
    const [data,addData]=useState({product_id:'',product_name:'',product_price:'',product_quantity:'',description:''})
    const navigate=useNavigate()
    function formHandler(e){
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/app/emp/",data).then(
            alert("Data added successfully"),
            navigate("/")
        )
    }

    return(
        <div className="container">
            <form onSubmit={formHandler}>
            <label>Product Id : </label>
                <input type="number" className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_id:e.target.value})
                }}/>
                <label>Name : </label>
                <input type="text" className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_name:e.target.value})
                }}/>
                <label>Price : </label>
                <input type="text" className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_price:e.target.value})
                }}/>
                <label>Quantity : </label>
                <input type="number" className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_quantity:e.target.value})
                }}/>
                <label>Description : </label>
                <input type="text" className="form-control w-50" onChange={(e)=>{
                    addData({...data,description:e.target.value})
                }}/>

                <input type="submit"/>
            </form>
        </div>
    )
}
export default Add;