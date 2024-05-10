import React, {useEffect, useState} from "react";
import BackButton from "../Components/BackButton.jsx";
import Spinner from "../Components/Spinner.jsx";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {enqueueSnackbar} from "notistack";

import {url} from '../constant/config.js';


const EditOrder = () => {
    const [loading,setLoading] = useState(false);
    const [userId,setUserId] = useState('');
    const [products,setProducts] = useState([]);
    const [deliveryAddress,setDeliveryAddress] = useState('')
    const [orderStatus,setOrderStatus] = useState('pending');
    const [total,setTotalPrice] = useState(0);
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${url}/orders/${id}`)
            .then((response) => {
                setUserId(response.data.userId);
                setProducts(response.data.products);
                setDeliveryAddress(response.data.address);
                setOrderStatus(response.data.orderStatus);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    const increaseQuantity = (index) => {
        const updatedProducts = [...products];
        updatedProducts[index].quantity++;
        setProducts(updatedProducts);
        calculateTotal(updatedProducts);
    };

    const decreaseQuantity = (index) => {
        const updatedProducts = [...products];
        if (updatedProducts[index].quantity > 1) {
            updatedProducts[index].quantity--;
            setProducts(updatedProducts);
            calculateTotal(updatedProducts);
        }
    };

    const calculateTotal = (products) => {
        const totalPrice = products.reduce((acc, product) => {
            return acc + (product.quantity * product.product.disPrice);
        }, 0);
        setTotalPrice(totalPrice);
    };


    const handleUpdate = () => {

        const data = {
            userId,
            total,
            deliveryAddress,
            products: products.map(product => ({
                product: { _id: product.product._id._id || product.product._id.toString() },
                quantity: product.quantity
            }))

        }
        console.log(products)
        axios.put(`${url}/orders/edit/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Order Updated Successfully',{variant: 'success'})
                navigate('/orders');
            })
            .catch(error => {
                enqueueSnackbar('Error',{variant:'error'});
                console.log(error);
            });
    };

    return (
        <div>
            <div>
                <BackButton/>
                <h1 className='text-center'>Edit Order</h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className="mb-3">
                    <label className="form-label">User Id</label>
                    <input type="text" className="form-control"
                           aria-describedby="emailHelp" value={userId} onChange={(e) => setUserId(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Products</label>

                    <div className='d-flex gap-3'>
                        {products.map((product, index) => (
                            <div key={index} className="card p-2" style={{width: '18rem'}}>
                                <img src={`${url}/images/${product.product.imageUrl}`} className="card-img-top"
                                     alt="..."/>
                                <div className="card-body">
                                    <p className="card-text">{product.product.name}</p>
                                    {product.product.discount === 0 ? (
                                        <p className="card-text">{product.product.price}</p>
                                    ) : (
                                        <div>
                                            <p className="card-text text-decoration-line-through">{product.product.price}</p>
                                            <div className='d-flex'>
                                                <div>RS.{product.product.disPrice} /=</div>
                                                <p className='text-danger'>({product.product.discount}% discount
                                                    added)</p>
                                            </div>
                                        </div>
                                    )}

                                    <p className="card-text"> Quantity :<i className="bi bi-dash-circle-fill"
                                                                          onClick={() => decreaseQuantity(index)} ></i> {product.quantity} <i
                                        className="bi bi-plus-circle-fill"
                                        onClick={() => increaseQuantity(index)}></i></p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Delivery Address</label>
                        <input type="text" className="form-control"
                               aria-describedby="emailHelp" value={deliveryAddress}
                               onChange={(e) => setDeliveryAddress(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <button type="button" className="btn btn-success" onClick={handleUpdate}>Update Order</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default EditOrder;
