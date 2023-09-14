import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./AxiosGet.css";
import Image from "./downloa.jpeg";
import Barchart from "./Barchart"
import DouChart from "./DouChart";
import Piechart from "./Piechart";

const AxiosGet = () => {
    const [data, setdata] = useState([]);
    const[query,setquery]=useState('')
    const [selectedRange, setSelectedRange] = useState('');
    let sum = 0
    function GrandTotal(item) {
        sum = sum + item
        return sum

    }
    const priceRanges = [
        { label: '0 - 100000', min: 0, max:100000 },
        { label: '1000 - 3000', min: 1000, max: 3000 },
        { label: '3000 - 10000', min: 3000, max: 10000 },
        { label: '10000 - 100000', min: 10000, max: 100000 },
        // Add more ranges as needed
      ];
    useEffect(() => {
    if(query!==""){
            axios.get(`http://127.0.0.1:8000/app/search/${query}/`).then(res=>{
                setdata(res.data)
            }).catch(err=>console.log(err))
        }
    else{
         getData();
    } 
    }, [query])

    function getData() {
        axios.get('http://127.0.0.1:8000/app/emp/').then(res => {
            setdata(res.data);

        })
            .catch(error => console.log(error))
    }


    function HandleIncrement(item) {
        axios.patch(`http://127.0.0.1:8000/app/increment/${item.id}/`, { "product_quantity": item.product_quantity + 1, "total": item.product_quantity* item.product_price })
            .then((res) => { getData() })
            .catch(error => console.log(error))
    }
    function HandleDecrement(item) {
        axios.patch(`http://127.0.0.1:8000/app/increment/${item.id}/`, { "product_quantity": item.product_quantity - 1, "total": item.product_quantity * item.product_price })
            .then((res) => { getData() })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        if (selectedRange) {
            axios.get(`http://127.0.0.1:8000/app/drop/${selectedRange.min}/${selectedRange.max}/`).then(res=>{
                setdata(res.data)
            }).catch(err=>console.log(err))
          
        }
      }, [selectedRange]);


    return (

            <div className="p-5">
                 {/* <div>
                    <Link to="/bar" className="btn btn-info">Bar chart</Link>&emsp;
                    <Link to="/dough" className="btn btn-info">Doughnut chart</Link>&emsp;
                    <Link to="/pie" className="btn btn-info">Pie chart</Link>&emsp;
                    </div> */}
                  <select value={JSON.stringify(selectedRange)} onChange={(e) => setSelectedRange(JSON.parse(e.target.value))}>
                  <option value="">Select Price Range</option>
                 {priceRanges.map((range, index) => (
                  <option key={index} value={JSON.stringify(range)}>
                      {range.label}
                  </option>
                     ))}
                 </select>
                 <div className="text-end mb-4">
                 <Link to="/add" className="btn btn-primary text-end ">Add data</Link> </div>

                   
                 <input type="text"
                placeholder="search...."  onChange={(e)=>setquery(e.target.value)}/>
               
            <Table striped bordered hover size="sm" style={{marginBottom:20}}>
                <thead>
                    <tr>
                         <th>id</th>
                        <th>product_id</th>
                        <th>image</th>
                        <th> Name</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((item) => {
                        return (

                            <tr key={item.id}>
                                <td>{item.id}</td>

                                <td>{item.product_id}</td>
                                <td><center><img src={Image}  style={{height:50}} /></center></td>

                                <td>
                                    {item.product_name}
                                </td>
                                <td>{item.product_price}</td>
                                <td>
                                    <button onClick={() => HandleDecrement(item)}>-</button> {item.product_quantity}<button onClick={() => HandleIncrement(item)}>+</button>
                                </td>
                                <td onChange={GrandTotal(item.total)}>

                                    {item.total}

                                </td>
                                <td>&emsp;&emsp;
                                    <Link to={`/update/${item.id}`} className="btn btn-success btn-sm">Update</Link>&emsp;&emsp;
                                    <Link to={`/delete/${item.id}`} className="btn btn-danger btn-sm">Delete</Link>&emsp;&emsp;
                                    <Link to={`/view/${item.id}`} className="btn btn-dark btn-sm">View More</Link>&emsp;&emsp;
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>GrandTotal</td>
                        <td>{sum}</td>
                    </tr>


                </tbody>


            </Table>
            <div className="row">
             <div className="column"><Barchart/></div>
             <div className="column"><DouChart/></div>
             <div className="column"><Piechart/></div>
            </div>  
        </div> 

    )
}
export default AxiosGet;
