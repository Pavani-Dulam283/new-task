import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js";
import { Bar } from 'react-chartjs-2';
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

  const Barchart=()=> {
    ChartJS.register(
        BarElement,CategoryScale,LinearScale,Tooltip,Legend
    )
    const l=[]
    const[graph,setgraph]=useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/pro/person/").then(res=>{
          setgraph(res.data)
      }).catch(err=>console.log(err))
      },[])
      {graph.map((item)=>{
        l.push(item.id)})}
    const da={
        labels:['jan','feb','march','april','may','june','july'],
        datasets:[
            {
            label:'Dataset1',
            data:l,
            backgroundColor:'aqua',
            borderColor:'black',
            borderWidth:1,
            }
            // },
            // {
            //     label:'Dataset2',
            //     data:[3,20,9,12,5,6,20],
            //     backgroundColor:'pink',
            //     borderColor:'black',
            //     borderWidth:1, 
            //     },
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