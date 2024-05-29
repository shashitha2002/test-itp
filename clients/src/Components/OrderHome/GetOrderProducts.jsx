import React, {useEffect, useState} from "react";
import axios from "axios";
import {url} from '../../constant/config.js';
const GetOrderProducts = ({product}) => {

    return(

        <div className="card p-2" style={{ width: '18rem' }}>
            <img src={`${url}/images/${product.product.imageUrl}`} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{product.product.name}</p>
                {product.product.discount === 0 ? (
                    <p className="card-text">{product.product.price}</p>
                ) : (
                    <div>
                        <p className="card-text text-decoration-line-through">{product.product.price}</p>
                        <div className='d-flex'>
                            <div>RS.{product.product.disPrice} /=</div>
                            <p className='text-danger'>({product.product.discount}% discount added)</p>
                        </div>
                    </div>


                )}


            </div>
        </div>
    )
}

export default GetOrderProducts;