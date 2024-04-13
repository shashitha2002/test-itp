import React, {useState} from "react";
import NavBar from "../Components/NavBar.jsx";
import Spinner from "../Components/Spinner.jsx";
import {useEffect} from "react";
import axios from "axios";
import OrderTable from "../Components/OrderHome/OrderTable.jsx";
const Orders = () => {

    const [orders,setOrders] = useState([]);
    const [loading,setLoading] =useState(false);

    useEffect( () => {
        setLoading(true)
        setTimeout(() => {
            axios
                .get('http://localhost:3500/orders/all')
                .then((response) => {
                    setOrders(response.data.data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
        },2500)
    },[])

    return (
        <div className='p-4'>
            <div className='d-flex justify-content-center '><NavBar/>
            </div>
            <div className='text-center p-4 h2'>Order List</div>
            {
                loading ? (
                    <Spinner/>
                ) : (
                    <OrderTable orders={orders}/>
                )
            }
        </div>
    )
}

export default Orders;