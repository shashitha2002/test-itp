import React, {useEffect, useState} from "react";
import axios from "axios";
const GetTotalPrice = ({product}) => {

    const [productName,setProductName] = useState('');
    const [disPrice,setDisPrice] = useState(0);

    useEffect(() => {
        axios
            .get(`http://localhost:3500/products/${product}`)
            .then((response) => {
                setProductName(response.data.name)
                setDisPrice(response.data.disPrice)
            })
    }, [product]);

    return(
        <div>
            <h6 className='fw-normal'>{productName} <i className="bi bi-arrow-right"></i> {disPrice}</h6>
        </div>
    )
}

export default GetTotalPrice;

