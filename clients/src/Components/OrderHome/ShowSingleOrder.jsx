import React, {useState,useEffect} from "react";
import BackButton from "../BackButton.jsx";
import Spinner from "../Spinner.jsx";
import axios from "axios";
import {useParams} from "react-router-dom";
import GetOrderProducts from "./GetOrderProducts.jsx";
import GetTotalPrice from "./GetTotalPrice.jsx";
import {url} from '../../constant/config.js';
const ShowSingleOrder = () => {
    const [loading,setLoading] = useState(false);
    const [orderId, setOrderId] = useState('');
    const [userId,setUserId] = useState('');
    const [products,setProducts] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0);
    const [DeliveryAddress,setDeliveryAddress] = useState('')
    const [orderStatus,setOrderStatus] = useState('pending');
    const {id} = useParams()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${url}/orders/${id}`)
            .then((response) => {
                setOrderId(response.data._id)
                setUserId(response.data.userId);
                setProducts(response.data.products);
                setTotalPrice(response.data.totalPrice);
                setDeliveryAddress(response.data.address);
                setOrderStatus(response.data.orderStatus);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    return(
        <div>
            <BackButton/>
            {loading ? <Spinner/> : ''}
            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className='border p-4 m-5 bg-white'>
                    <div className='text-center p-5'>
                        <h2>Order : {orderId}</h2>
                    </div>

                    <div className='p-4 d-flex justify-content-between'>
                        <div className=''>
                            <h3 className='d-flex gap-2'>
                                <i className="bi bi-person-circle"></i>
                                <p>User ID : </p>
                                <p>{userId}</p>
                            </h3>
                        </div>

                        <div className=''>
                            <h3 className='d-flex gap-2'>
                                <p>Order Status : </p>
                                <p>{orderStatus}</p>
                            </h3>
                        </div>

                    </div>

                    <div className='fs-5 p-2'>
                        contained products :
                    </div>

                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>

                        {products.map((product, index) => (
                            <div key={index}>
                                <GetOrderProducts product={product}/>

                            </div>
                        ))}
                    </div>
                    <div className='p-4'>
                        {products.map((product, index) => (
                            <div key={index}>
                                <GetTotalPrice product={product}/>
                            </div>
                        ))}
                    </div>

                    <div className='p-4'>
                        Delivery Address : {DeliveryAddress}
                    </div>

                    <div className='fs-5'>
                        Total price = RS. {totalPrice} /=
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowSingleOrder;