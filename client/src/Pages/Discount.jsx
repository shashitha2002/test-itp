import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link,useNavigate} from "react-router-dom";

const Discount = () => {

    const[products,setProducts] = useState([]);
    const [price,setPrice] = useState(0);
    const [disPrice,setDisPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [loading,setLoading] =useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3500/products/all')
            .then((response) => {
                setProducts(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    return (
        <div className='p-4 m-xxl-5 '>
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
        </div>
    )
}

export default Discount;