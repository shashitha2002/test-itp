import React from "react";
import {Link} from "react-router-dom";
const OrderTable = ({orders}) => {
    return (
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

                                            <button type="button" className="btn btn-success"><i
                                                className="bi bi-pencil-square"> Edit</i>
                                            </button>

                                        <button type="button" className="btn btn-danger">
                                            <i className="bi bi-trash3-fill"> Delete</i>
                                        </button>
                                    </div>
                                        ) : (
                                    <div className='d-flex flex-row gap-3 justify-content-center'>
                                        <button type="button" className="btn btn-dark"><i
                                            className="bi bi-pencil-square" > Edit</i>
                                        </button>

                                        <button type="button" className="btn btn-dark">
                                            <i className="bi bi-trash3-fill"> Delete</i>
                                        </button>
                                    </div>
                                )}


                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default OrderTable