import React, {useEffect, useState} from "react";
import axios from "axios";
import {Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {enqueueSnackbar} from "notistack";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../Redux/actions.js";
import {url} from '../constant/config.js';

const ProductList = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector((state) => {return state.count});
    const navigate = useNavigate()
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    const [names, setNames] = useState([]);
    const [prices,setProductPrices] = useState([]);


    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            axios
                .get(`${url}/products`)
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


    const DisplayProduct = (id) => {
        navigate(`/products/show/${id}`)
    }

    const handleCart = (product) => {
        dispatch(addProduct(product))
    }

    const goCart = () => {
        const storedCartState = JSON.parse(localStorage.getItem("cartList"));

        const cartCount = storedCartState.count;
        if(cartCount === 0){
            enqueueSnackbar('add some products to the cart',{variant:'error', anchorOrigin: { vertical: 'top', horizontal: 'right' } })
        }
        else
        {
            navigate('/cart', { state: { cart,names,prices} });
        }

    }


    return(
        <div className='p-4'>
            <div className='p-4 d-flex justify-content-between'>
                <div>
                    <h3 className='d-flex gap-2'>
                        product List ({products.length})
                    </h3>
                </div>

                <div>
                    <h3 className='d-flex gap-2'>
                        <button type="button" className="btn btn-success btn-lg" onClick={goCart}>My Cart <i
                            className="bi bi-cart4"></i> {cartCount}</button>
                    </h3>
                </div>

            </div>

            <div className='d-flex gap-5'>
                {loading ? (
                    <Spinner/>
                ) : (
                    products.map((product, index) => ( // Added index parameter
                        <div className="card" key={index} style={{width: '18rem'}}>

                            <img src={`${url}/images/${product.imageUrl}`}
                                 className="card-img-top" alt={product.name}
                                 style={{width: '100%', height: '200px', objectFit: 'cover'}}
                                 onClick={() => DisplayProduct(product._id)}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                {product.discount === 0 ? (
                                    <p className="card-text">RS.{product.price}/=</p>
                                ) : (
                                    <div>
                                        <div className='text-decoration-line-through'>RS.{product.price}</div>
                                        <div className='d-flex'>
                                            <p className=''>RS.{product.disPrice}/=</p>
                                            <p className='text-danger'>({product.discount}% discount added)</p>
                                        </div>
                                    </div>

                                )
                                }

                                <div>
                                    { product.quantity === 0 ? (
                                        <p>Out of stoke</p>
                                    ) : (
                                        <p>{product.quantity} : available</p>
                                    )

                                    }

                                </div>

                                <button className="btn btn-success" onClick={() => {handleCart(product)}} >Add to cart <i className="bi bi-cart-plus"></i></button>
                            </div>
                        </div>
                    ))
                )}

            </div>
        </div>


    )
}

export default ProductList