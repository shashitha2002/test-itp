import React, { useState } from "react";
import BackButton from "../Components/BackButton";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { url } from "../constant/config";
import Spinner from "../Components/Spinner.jsx";

const CustomerPendingOrders = () => {

    const [loading,setLoading] = useState(false)
    const [orders,setOrders] = useState([]);

    const userId = "it22322708";

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        axios
            .get(`${url}/orders/customerPendingOrders/${userId}`)
            .then((res) => {
                
                if (Array.isArray(res.data.orders)) {
                    setOrders(res.data.orders);
                } else {
                    console.log("Invalid response format: ", res.data);
                }

                setLoading(true);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
        },1500)    
    },[userId])
   
  return (
    <>
      <div className="">
        <BackButton />
     </div>
      <h3 className="p-4 mb-3">Welcome {userId}</h3>

      <h1 className="mb-4 text-center flex-grow-1">My Orders</h1>

      <div>
                <table className="table table-striped table-hover border">
                    <thead>
                    <tr>
                        
                        <th className='text-center'>No</th>
                        <th className='text-center'>User ID</th>
                        <th className='text-center'>Order ID</th>
                        <th className='text-center'>orderStatus</th>
                        <th className='text-center'>Actions</th>

                    </tr>
                    </thead>
                    <tbody>

                    {loading ? (
                        <Spinner/>
                    ) : (
                        
                        Array.isArray(orders) && orders.map((order, index) => (
                            <tr key={index}>
                                <td className='text-center'>{index + 1}</td>
                                <td className='text-center'>
                                    {order.userId}
    
                                </td>
                                <td className='text-center'>
                                    <div className='d-flex flex-row gap-3 justify-content-center'>
                                        {order._id}
                                        <Link to={`/orders/show/${order._id}`}>
                                            <i className="bi bi-box-seam-fill"></i>
                                        </Link>
                                    </div>
                                </td>
                                <td className='text-center'>
                                    {order.orderStatus}
                                </td>
                                <td className='text-center'>
    
                                    {
                                        order.orderStatus === 'pending' ? (
                                            <div className='d-flex flex-row gap-3 justify-content-center'>
                                                <Link to={`/orders/edit/${order._id}`}>
                                                    <button type="button" className="btn btn-success"><i
                                                        className="bi bi-pencil-square"> Edit</i>
                                                    </button>
                                                </Link>
    
                                                <Link to={`/orders/delete/${order._id}`}>
                                                    <button type="button" className="btn btn-danger">
                                                        <i className="bi bi-trash3-fill"> Delete</i>
                                                    </button>
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className='d-flex flex-row gap-3 justify-content-center'>
    
                                                <button type="button" className="btn btn-dark">
                                                    {order.orderStatus}
                                                </button>
                                            </div>
                                        )}
    
    
                                </td>
                            </tr>
                        ))

                    )}
                        
                    </tbody>
                </table>
            </div>
    </>
  );
};

export default CustomerPendingOrders;
