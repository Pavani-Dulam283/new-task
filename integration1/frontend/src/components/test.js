import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';
const AxiosGet = () => {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/app/emp/').then(res => setdata(res.data))

    }, [])
    
    
    return (

        <div className="p-5">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>id</th>
                        <th> Name</th>
                        <th>price</th>
                        <th>quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>

                        <tr key={item.id}>
                            <td>{item.product_id}</td>
                            <td>
                                {item.product_name}
                            </td>
                            <td>{item.product_price}</td>
                            <td>{item.product_quantity}</td>
                        </tr>)}


                </tbody>

            </Table>
        </div>

    )
}
export default AxiosGet;