import React, {useEffect, useState} from "react";
import axios from "axios";
import {url} from '../../constant/config.js';
const GetOrderProducts = ({product}) => {

    const [productName,setProductName] = useState('');
    const [image,setImage] = useState('');
    const [Price,setPrice] = useState(0);
    const [disPrice,setDisPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    useEffect(() => {
        axios
            .get(`${url}/products/${product.product}`)
            .then((response) => {
                setProductName(response.data.name)
                setImage(response.data.imageUrl)
                setDisPrice(response.data.disPrice)
                setPrice(response.data.price)
                setDiscount(response.data.discount)
            })
    }, [product]);

    return(

        <div className="card p-2" style={{ width: '18rem' }}>
            <img src={`${url}/images/${image}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{productName}</p>
                {discount === 0 ? (
                    <p className="card-text">{Price}</p>
                ) : (
                    <div>
                        <p className="card-text text-decoration-line-through">{Price}</p>
                        <div className='d-flex'>
                            <div>RS.{disPrice} /=</div>
                            <p className='text-danger'>({discount}% discount added)</p>
                        </div>
                    </div>


                )}


            </div>
        </div>
    )
}

export default GetOrderProducts;