import React, {useEffect, useState} from "react";
import axios from "axios";
import {url} from '../../constant/config.js';
const GetTotalPrice = ({product}) => {

    const [productName,setProductName] = useState('');
    const [disPrice,setDisPrice] = useState(0);

    useEffect(() => {
        axios
            .get(`${url}/products/${product.product}`)
            .then((response) => {
                setProductName(response.data.name)
                setDisPrice(response.data.disPrice)
            })
    }, [product]);


    const getEachTotal = (disPrice,quantity) => {
        return disPrice * quantity;
    }

    return(
        <div>
            <h6 className='fw-normal'>{productName} <i className="bi bi-arrow-right"></i> {disPrice} <i
                className="bi bi-x"></i> {product.quantity} = {getEachTotal(disPrice,product.quantity)}</h6>
        </div>
    )
}

export default GetTotalPrice;

