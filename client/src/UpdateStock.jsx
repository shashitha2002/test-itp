/*

import React from "react";
import axios from "axios";
import {useState,useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function Updatestock(){


    const [productID, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [quantity, setQuantity] = useState(0)
    const [loading,setLoading] = useState(false);
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/stocks/${id}`)
            .then((res) => {
                setProductId(res.data.productID);
                setProductName(res.data.productName);
                setQuantity(res.data.quantity);
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                alert('An error happened. Please Check console')
                console.log(error)
            })
    }, [id]);


    const handleEditProduct = () => {

        const data = {
            productID,
            productName,
            quantity,
        }

        setLoading(true);

        axios
            .put(`http://localhost:5555/stocks/edit/${id}`,data)
            .then(() => {
                setLoading(false);
                navigate('/');

            })
            .catch((error) => {
                setLoading(false);
                //alert('An error happened. Please Check console')
                console.log(error);
            })


    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-ceneter' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
        <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
            <Link to="/" className='text-info'>Home</Link><br/><br/>
                    <h2>Update Stock</h2>
                    <div className='mb-2'>
                        <label>Product Id</label>
                        <input type="text" placeholder='Enter Product Id' className='form-control' value={productID} onChange={(e) => {setProductId(e.target.value)}}/>
                    </div>
                    <div className='mb-2'>
                        <label>Product Name</label>
                        <input type="text" placeholder='Enter Product name' className='form-control' value={productName} onChange={(e) => {setProductName(e.target.value)}}/>
                    </div>
                    <div className='mb-2'>
                        <label>Quantity</label>
                        <input type="number" placeholder='Enter Kg' className='form-control' value={quantity} onChange={(e) => {setQuantity(e.target.value)}}/>
                    </div>
                    <button className='btn btn-success' onClick={handleEditProduct}>Update</button>
        </div>
    </div>
    ) 
}

export default Updatestock;

*/
/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Updatestock() {
    const [productID, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [expireDate, setExpireDate] = useState('');
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:5555/stocks/${id}`)
            .then((res) => {
                const { productID, productName, quantity, expireDate } = res.data;
                setProductId(productID);
                setProductName(productName);
                setQuantity(quantity);
                setExpireDate(expireDate); // Assuming expireDate is a string in ISO format (e.g., "2024-05-01")
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    }, [id]);

    const handleEditProduct = () => {
        const data = {
            productID,
            productName,
            quantity,
            expireDate
        };

        setLoading(true);

        axios
            .put(`http://localhost:5555/stocks/edit/${id}`, data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
            <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
                <Link to="/" className='text-info'>Home</Link><br/><br/>
                <h2>Update Stock</h2>
                <div className='mb-2'>
                    <label>Product ID</label>
                    <input type="text" placeholder='Enter Product Id' className='form-control' value={productID} onChange={(e) => setProductId(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label>Product Name</label>
                    <input type="text" placeholder='Enter Product name' className='form-control' value={productName} onChange={(e) => setProductName(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label>Quantity</label>
                    <input type="number" placeholder='Enter Kg' className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                </div>
                <div className='mb-2'>
                    <label>Expire Date</label>
                    <input type="date" className='form-control' value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
                </div>
                <button className='btn btn-success' onClick={handleEditProduct}>Update</button>
            </div>
        </div>
    );
}

export default Updatestock;

*/

/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function Update() {
    const [productID, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [expireDate, setExpireDate] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5555/stocks/${id}`)
            .then(response => {
                const stock = response.data;
                setProductId(stock.productID);
                setProductName(stock.productName);
                setQuantity(stock.quantity);
                setExpireDate(stock.expireDate ? new Date(stock.expireDate).toISOString().split('T')[0] : ''); // Set existing expire date if available
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedStock = {
            productID,
            productName,
            quantity,
            expireDate
        };
        await axios.put(`http://localhost:5555/stocks/edit/${id}`, updatedStock);
        navigate('/');
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
        <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
                <h2>Update Stock</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Product ID</label>
                        <input type="text" className="form-control" value={productID} onChange={(e) => setProductId(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expire Date</label>
                        <input type="date" className="form-control" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default Update;



*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function Update() {
    const [productID, setProductId] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [expireDate, setExpireDate] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5555/stocks/${id}`)
            .then(response => {
                const stock = response.data;
                setProductId(stock.productID);
                setProductName(stock.productName);
                setQuantity(stock.quantity);
                setExpireDate(stock.expireDate ? new Date(stock.expireDate).toISOString().split('T')[0] : ''); // Set existing expire date if available
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedStock = {
            productID,
            productName,
            quantity,
            expireDate
        };
        await axios.put(`http://localhost:5555/stocks/edit/${id}`, updatedStock);
        navigate('/');
    };

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center' style={{backgroundImage: "url('https://ecuy5icyve9.exactdn.com/wp-content/uploads/2023/12/Inventory-Strategies-to-Avoid-Amazons-Long-Term-Storage-Fees.jpg?strip=all&lossy=0&sharp=1&ssl=1')"}}>
            <div className='w-50 bg-white rounded p-3' style={{marginTop:'30px', marginBottom:'30px'}}>
                <h2>Update Stock</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Product ID</label>
                        <input type="text" className="form-control" value={productID} onChange={(e) => setProductId(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Quantity</label>
                        <input type="number" className="form-control" value={quantity} onChange={(e) => {
                            const value = parseInt(e.target.value);
                            if (!isNaN(value) && value >= 0 && value <= 100) {
                                setQuantity(value);
                            }
                        }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Expire Date</label>
                        <input type="date" className="form-control" value={expireDate} onChange={(e) => setExpireDate(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                    <Link to="/" className="btn btn-secondary ms-2">Cancel</Link>
                </form>
            </div>
        </div>
    );
}

export default Update;
