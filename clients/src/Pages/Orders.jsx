import React, {useEffect, useState} from "react";
import NavBar from "../Components/NavBar.jsx";
import Spinner from "../Components/Spinner.jsx";
import axios from "axios";
import OrderTable from "../Components/OrderHome/OrderTable.jsx";
import {url} from '../constant/config.js';
import {orderData} from "../constant/data.js";
import {useNavigate} from "react-router-dom";


const Orders = () => {

    const [orders,setOrders] = useState([]);
    const [loading,setLoading] =useState(false);
    const [year,setYear] =useState('');
    const [orderData,setOrderData] = useState([{}]);
    const [products,setProducts] = useState([]);
    const [orderDataByYear,setOrderDataByYear] = useState([{}]);
    const [orderDataByMonth,setOrderDataByMonth] = useState([{}]);
    const [month,setMonth] =useState('');

    const [filteredYears, setFilteredYears] = useState([])
    const [filteredMonths, setFilteredMonths] = useState([])

    const navigate = useNavigate();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    const [chartData,setChartData] = useState(
        {
            labels: [],
            datasets : [{
                label : 'orderData',
                data : []
            }]
        }
    );

    useEffect( () => {
        setLoading(true)
        setTimeout( async () => {
            await axios
                .get(`${url}/orders/all`)
                .then(async (response) => {
                    setOrders(response.data.data);



                    setLoading(true);






                    setLoading(false)
                })
        },2500)
    },[])



    const handleReport = async () => {
        const orderDataByYear = orders.filter((data) => new Date(data.createdAt).getFullYear() === parseInt(year));


        const orderDataByMonth = orderDataByYear.filter((data) => monthNames[new Date(data.createdAt).getMonth()] === month);


        const ordersMap = orderDataByMonth.flatMap((data) => {
            return data.products.map((product) => {
                return {
                    product: product.product.name,
                    quantity: product.product.quantity
                };
            });
        });


        const uniqueProducts = ordersMap.reduce((acc, obj) => {
            const existingProductIndex = acc.findIndex(item => item.product === obj.product);
            if (existingProductIndex !== -1) {
                acc[existingProductIndex].quantity += obj.quantity;
            } else {
                acc.push({product: obj.product, quantity: obj.quantity});
            }
            return acc;
        }, []);


        setOrderDataByYear(orderDataByYear);
        setOrderDataByMonth(orderDataByMonth);
        setProducts(uniqueProducts);

        const chartDatas = {
            labels: uniqueProducts.map((data) => data.product),
            datasets: [{
                label: 'orderData',
                data: uniqueProducts.map((data) => data.quantity)
            }]
        }

        setChartData(chartDatas);

        console.log(chartData)


    };

    useEffect(() => {
        if(chartData.labels.length > 0){
            navigate('/orderReport', { state: chartData  });
        }
    }, [chartData]);

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

            <div className='d-flex gap-3'>
                <button type="button" className="btn btn-success" onClick={handleReport}>
                    generate report
                </button>

                <div>
                    <select className="form-select form-select-sm" aria-label="Small select example" onChange={(e) => setYear(e.target.value)}>
                        <option defaultValue>Year</option>
                        {Array.from(new Set(orders.map((data) => new Date(data.createdAt).getFullYear()))).map(option => (
                            <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <select className="form-select form-select-sm" aria-label="Small select example" onChange={(e) => setMonth(e.target.value)}>
                        <option defaultValue>Month</option>
                        {Array.from(new Set(orders.map((data) => monthNames[new Date(data.createdAt).getMonth()]))).map(option => (
                            <option value={option} key={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>
            {/*<BarChart chartData={chartData}/>*/}
        </div>
    )
}

export default Orders;