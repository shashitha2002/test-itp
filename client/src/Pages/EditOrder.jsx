import React, {useEffect, useState} from "react";
import BackButton from "../Components/BackButton.jsx";
import Spinner from "../Components/Spinner.jsx";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import {enqueueSnackbar} from "notistack";
import EditOrderProducts from "../Components/OrderHome/EditOrderProducts.jsx";

const EditOrder = () => {
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState('');
    const [products, setProducts] = useState([]);
    const [orderStatus, setOrderStatus] = useState('');
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`http://localhost:3500/orders/${id}`)
            .then((response) => {
                setUserId(response.data.userId);
                setProducts(response.data.products);
                setOrderStatus(response.data.orderStatus);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const handleProductChange = (index, newProductId) => {
        const updatedProducts = [...products];
        updatedProducts[index] = newProductId;
        setProducts(updatedProducts);
    };

    const handleOrderStatusChange = (e) => {
        setOrderStatus(e.target.value);
    };

    const handleSubmit = () => {

        const data = {
            products,
            orderStatus
        }

        axios.put(`http://localhost:3500/orders/edit/${id}`, data)
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
                <BackButton destination={'/'} />
                <h1 className='text-center'>Edit Order</h1>
            </div>
            {loading ? <Spinner /> : ''}
            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className="mb-3">
                    <label className="form-label">User Id</label>
                    <input type="text" className="form-control"
                           aria-describedby="emailHelp" value={userId} onChange={(e) => setUserId(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Products</label>
                    {products.map((product, index) => (
                        <div key={index} className='p-3'>
                            <EditOrderProducts product={product} onProductChange={(newProductId) => handleProductChange(index, newProductId)} />
                        </div>
                    ))}
                </div>

                <div className="mb-3">
                    <label className="form-label">Order Status</label>
                    <select className="form-select" aria-label="Default select example" onChange={handleOrderStatusChange} value={orderStatus}>
                        <option value="pending">pending</option>
                        <option value="shipped">shipped</option>
                        <option value="delivered">delivered</option>
                    </select>
                </div>

                <button type="submit" className="border border-0 btn btn-success" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default EditOrder;
