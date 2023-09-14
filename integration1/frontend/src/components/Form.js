import React, { useEffect, useState } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Button} from 'react-bootstrap';

const Form= () => {
    const [data, setdata] = useState([]);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/app/emp/')
            .then(res => setdata(res.data))
            .catch(error => console.error('GET Error:', error));
    }, []);

    const handleAddProduct = () => {
        const newProduct = {
            product_name: productName,
            product_price: productPrice,
            product_quantity: productQuantity
        };

        axios.post('http://127.0.0.1:8000/app/emp/', newProduct)
            .then(response => {
                console.log('POST Response:', response.data);
                // Assuming the response contains the newly added product
                setdata([...data, response.data]);
            })
            .catch(error => console.error('POST Error:', error));
    };

    return (
        <div className="p-5">
           
            <Form className="add-form">
                <h2>Add New Product</h2>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={productName} onChange={e => setProductName(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={productPrice} onChange={e => setProductPrice(e.target.value)} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" value={productQuantity} onChange={e => setProductQuantity(e.target.value)} />
                </Form.Group>
                <Button variant="primary" onClick={handleAddProduct}>Add Product</Button>
            </Form>
        </div>
    );
};

export default Form;
