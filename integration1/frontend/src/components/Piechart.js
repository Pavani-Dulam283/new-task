import {Chart as ChartJS,ArcElement,CategoryScale,LinearScale,Tooltip,Legend} from "chart.js";
import { Pie } from 'react-chartjs-2';
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

  const Piechart=()=> {
    ChartJS.register(
        ArcElement,CategoryScale,LinearScale,Tooltip,Legend
    )
    const price=[]
    const name=[]
    const[graph,setgraph]=useState([])
    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/app/emp/").then(res=>{
          setgraph(res.data)
      }).catch(err=>console.log(err))
      },[])
      {graph.map((item)=>{
        price.push(item.product_price)
        name.push(item.product_name)
      })}
      console.log(name)
    const da={
        
        labels:name,
        datasets: [
            {
              label: '# product prices',
              data:price,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            }
        ]
        
        
    }
    const options={

    }
   
  return (
    <div>
        <div className="pie">
            <Pie data={da} options={options}></Pie>
        </div>
    </div>

  )
}
   
export default Piechart;