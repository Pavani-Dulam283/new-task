import React from "react";
import { useState } from "react";
import axios from "axios";
import {  useParams,Link,useLocation } from "react-router-dom";
import { useEffect } from "react";
import download from "./downloa.jpeg";



function View(){
    const [data,setData]=useState({})
    const location=useLocation();
    const {id}=useParams()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/app/emp/"+id+"/").then(
        response=>setData(response.data)
    )
    },[])

    return(
        <>
        <nav>
        <Link to="/"
        className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link to="/pro"
        className={location.pathname.startsWith("/view/") ? "breadcrumb-active" : "breadcrumb-not-active"}
      >
        ProductInfo
      </Link>
    </nav>

    <div class="card"style={{ backgroundColorcolor: 'blue', padding: 20,height:500,width:500,marginLeft:300 ,marginTop:100,borderColor:"red"}}>
    <div class="card-body">
      <h5 class="card-title">{data.product_name}:</h5>
      <img src={download} style={{width:150,height:150,marginTop:10}}/>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">product_id: {data.product_id}</li>
      <li class="list-group-item">product_name: {data.product_name}</li>
      <li class="list-group-item">product_price: {data.product_price}</li>
      <li class="list-group-item">product_quantity: {data.product_quantity}</li>
      <li class="list-group-item"><b>{data.description}</b></li>
    </ul>
  </div>
  </>
    )
}

export default View;