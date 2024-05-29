import React, {useEffect, useState} from "react";
import axios from "axios";
import {url} from "../constant/config.js";
import {Link} from "react-router-dom";
const MyOrders = () => {

    const userId = 'it22322708'
    const [orders,setOrders] = useState([]);
    const [loading,setLoading] =useState(false);

    useEffect( () => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get(`${url}/orders/all`)
                .then((response) => {
                    if(response.data.data.userId === userId){
                        setOrders(response.data.data);
                        setLoading(false)
                    }
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
        },2500)
    },[])

    return(
        <div className='p-4'>
            <div className='text-center p-4 h2'>Order List</div>

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
                    {orders.map((order, index) => (
                        <tr key={order._id}>
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
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )

}

export default MyOrders;