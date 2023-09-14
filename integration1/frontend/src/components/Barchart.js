import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js";
import { Bar } from 'react-chartjs-2';
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

  const Barchart=()=> {
    ChartJS.register(
        BarElement,CategoryScale,LinearScale,Tooltip,Legend
    )
    const price=[]
    const total=[]
    const name=[]
    const[graph,setgraph]=useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/app/emp/").then(res=>{
          setgraph(res.data)
      }).catch(err=>console.log(err))
      },[])
      {graph.map((item)=>{
        price.push(item.product_price)
        total.push(item.total)
        name.push(item.product_name)
      })}
      console.log(name)
    const da={
        
        labels:name,
        datasets:[
            {
            label:'prices',
            data:price,
            backgroundColor:'aqua',
            borderColor:'black',
            borderWidth:1,
            },
        
            {
                label:'total',
                data:total,
                backgroundColor:'pink',
                borderColor:'black',
                borderWidth:1, 
                },
        ]
    }
    const options={

    }
   
  return (
    <div>
        <div className="bar">
            <Bar data={da} options={options}></Bar>
        </div>
    </div>

  )
}
   
export default Barchart;