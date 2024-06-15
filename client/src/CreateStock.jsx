/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function CreateService () {
    const [productID, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const navigate = useNavigate()




    const Submit = () => {

        const data = {
            productID,
            productName,
            quantity,
        }

        console.log(data)

        axios
            .post('http://localhost:5555/stocks/add',data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {

                console.log(error);
            })



    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-ceneter' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
            <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
                <Link to="/" className='text-info'>Home</Link><br/><br/>

                        <h2>Add a new Stock</h2>
                        <div className='mb-2'>
                            <label>Product Id</label>
                            <input type="text" placeholder='Enter Product Id' className='form-control'
                            onChange={(e) => setProductId(e.target.value)}/>
                        </div>
                        <div className='mb-2'>
                            <label>Product Name</label>
                            <input type="text" placeholder='Enter Product name' className='form-control'
                            onChange={(e) => setProductName(e.target.value)}/>
                        </div>
                        <div className='mb-2'>
                            <label>Quantity</label>
                            <input type="number" placeholder='Enter Kg' className='form-control'
                            onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                        <button className='btn btn-success' onClick={Submit}>Submit</button>

            </div>
        </div>
    )
}

export default CreateService;
*/




/*
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateStock() {
    const [productID, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [expireDate, setExpireDate] = useState('');
    const navigate = useNavigate();

    const submit = () => {
        const data = {
            productID,
            productName,
            quantity,
            expireDate
        };

        axios
            .post('http://localhost:5555/stocks/add', data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
            <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
                <Link to="/" className='text-info'>Home</Link><br/><br/>
                <h2>Add a new Stock</h2>
                <div className='mb-2'>
                    <label>Product Id</label>
                    <input type="text" placeholder='Enter Product Id' className='form-control'
                        onChange={(e) => setProductId(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label>Product Name</label>
                    <input type="text" placeholder='Enter Product name' className='form-control'
                        onChange={(e) => setProductName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label>Quantity</label>
                    <input type="number" placeholder='Enter Kg' className='form-control'
                        onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label>Expire Date</label>
                    <input type="date" className='form-control'
                        onChange={(e) => setExpireDate(e.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default CreateStock;
*/


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateStock() {
    const [productID, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [expireDate, setExpireDate] = useState('');
    const navigate = useNavigate();

    const submit = () => {
        const data = {
            productID,
            productName,
            quantity,
            expireDate
        };

        axios
            .post('http://localhost:5555/stocks/add', data)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
            <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
                <Link to="/" className='text-info'>Home</Link><br/><br/>
                <h2>Add a new Stock</h2>
                <div className='mb-2'>
                    <label>Product Id</label>
                    <input type="text" placeholder='Enter Product Id' className='form-control'
                        onChange={(e) => setProductId(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label>Product Name</label>
                    <input type="text" placeholder='Enter Product name' className='form-control'
                        onChange={(e) => setProductName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label>Quantity</label>
                    <input 
                        type="number" 
                        placeholder='Enter Kg' 
                        className='form-control'
                        value={quantity}
                        onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 0 && value <= 100) {
                                setQuantity(value);
                            }
                        }}
                    />
                </div>
                <div className='mb-2'>
                    <label>Expire Date</label>
                    <input type="date" className='form-control'
                        onChange={(e) => setExpireDate(e.target.value)}/>
                </div>
                <button className='btn btn-success' onClick={submit}>Submit</button>
            </div>
        </div>
    );
}

export default CreateStock;


