import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
function DeleteData(){
    const {id}=useParams()
    const [data,delData]=useState({})
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/app/emp/"+id+"/").then(
        // response=>console.log(response.data)
        response=>delData(response.data)
    ).then(
        axios.delete("http://127.0.0.1:8000/app/emp/"+id+"/").then(
            alert("Field deleted successfully"),
            navigate("/")

        ).catch(error=>console.error(error))
    ).catch(error=>console.error(error))
    },[])

    return(
        <div></div>
    )
}

export default DeleteData;