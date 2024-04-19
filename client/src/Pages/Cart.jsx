import React from "react";
import { useLocation,useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton.jsx";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import {useDispatch, useSelector} from "react-redux";
import {decreaseQuantity, deleteItem, increaseQuantity} from "../Redux/actions.js";
import {url} from '../constant/config.js';

const Cart = () => {
    const dispatch = useDispatch();
    const cartState = useSelector((state) => {return state});
    const cartCount = useSelector((state) => {return state.count});
    const cartItems = cartState.products;

    //const cartItems = cartState.products;
    const userId = 'it22322708';
    const orderStatus = 'pending';
    const location = useLocation();
    const cart = cartItems.map((cartItem) => {return {product : cartItem._id,quantity : cartItem.quantity}});
    const names = location.state.names.filter(name => name.trim() !== '');
    const uniqueValues = [...new Set(names)];
    const navigate = useNavigate();

    //this is the previous code
   /* const handlePrice = (name) => {

        const [price,setPrice] = useState(0);

        for (const i of cart) {
            axios
                .get(`${url}/products/${i}`)
                .then((response) => {
                    if (response.data.name === name){
                        setPrice(response.data.disPrice);
                    }
                    }
                )
                .catch((error) => {
                    console.log(error)
                })
        }
       return price;
    }

    const calculateQuantity = (productName) => {
        return names.filter(item => item === productName).length;
    };*/

    const calTotalPrice = () => {

        let total = 0

        total = cartItems.reduce((acc, product) =>
            acc + (product.disPrice * product.quantity
        ), 0)

        return total;
    }

    let total = calTotalPrice();
    const handleOrder = () => {

        const data = {
            userId,
            cart,
            total,
            orderStatus
        }

        axios
            .post(`${url}/orders/add`,data)
            .then(() => {
                enqueueSnackbar('Product Created successfully', {variant: 'success'});
                navigate('/orders');
            })
            .catch((error) => {
                console.log(error)
            })

        localStorage.clear()
    }


    const handleIncreaseQuantity = (id) => {
        dispatch(increaseQuantity(id))
        //console.log(useSelector((state) => {return state.products}))
    }

    const handleDecreaseQuantity = (id) => {
        dispatch(decreaseQuantity(id))
    }

    const handleCancel  = () => {
        localStorage.clear();
        navigate('/productList');
    }

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
        localStorage.setItem("cartList", JSON.stringify(cartState))

        const storedCartState = JSON.parse(localStorage.getItem("cartList"));

        const cartCount = storedCartState.count;
        if(cartCount === 0){
            navigate('/productList')
        }
    }

    return (
        <div>
            <div>
                <hr/>
            </div>
            <div>
                <h1 className='p-4 fw-semibold'>Shopping Cart</h1>
            </div>
            <div>
                <hr/>
            </div>
            <div className='p-4 d-flex align-items-center gap-1'>
                <div><BackButton/></div>
                <div><a className='link-dark' style={{textDecoration: 'none'}} href={'/productList'}>continue
                    ordering</a></div>
            </div>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Product</th>
                    <th scope="col">quantity</th>
                    <th scope="col">price</th>
                </tr>
                </thead>
                <tbody>

                {cartItems.map((product) => (
                    <tr className='border-0' key={product._id}>
                        <td className='border-0'>{product.name} <i className="btn bi bi-x-circle-fill text-danger" onClick={() => {
                        handleDeleteItem(product._id)}
                        }></i></td>
                        <td className='border-0'>
                            <i className="bi bi-dash-circle-fill" onClick={() => {handleDecreaseQuantity(product._id)}}></i> {product.quantity} <i
                            className="bi bi-plus-circle-fill" onClick={() => handleIncreaseQuantity(product._id)}></i></td>
                        <td className='border-0'>{product.disPrice * product.quantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <hr/>
            <div className='p-2 d-flex gap-3'>
                <h1>Total Price</h1>
                <h1>RS. {total} /=</h1>
            </div>
            <div className='p-3 d-flex'>
                <button type="button" className="btn btn-success btn-lg" onClick={handleOrder}>Confirm Order</button>
                <button type="button" className="btn btn-danger" onClick={handleCancel}>cancel Order</button>
            </div>
        </div>
    );
};

export default Cart;
