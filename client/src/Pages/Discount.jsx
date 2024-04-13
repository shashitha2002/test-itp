import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";
import Spinner from "../Components/Spinner.jsx";
import ProductTable from "../Components/ProductHome/ProductTable.jsx";
import BackButton from "../Components/BackButton.jsx";

const Discount = () => {

    const[products,setProducts] = useState([]);
    const [price,setPrice] = useState(0);
    const [disPrice,setDisPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [loading,setLoading] =useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            axios
                .get('http://localhost:3500/products')
                .then((response) => {
                    setProducts(response.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
        },1000)
    }, []);


    return (

        <div className='p-4 '>
            <div>
                <BackButton destination={'/'}/>
                <h2 className='text-center p-2'>Add New Product</h2>
            </div>
            {loading ? (
                <Spinner/>
            ) : (
                <table className="table text-center">
                    <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Add Discount</th>

                    </tr>
                    </thead>
                    <tbody>
                    {products && products.map((product, index) => (
                        <tr key={product._id}>
                            <td scope="row">{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Link to={`/products/addDiscount/${product._id}`}>
                                    <button type="button" className="btn btn-success">Add</button>
                                </Link>
                            </td>
                        </tr>
                    ))}

                    </tbody>


                </table>
            )}


        </div>
    )
}

export default Discount;