import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import BackButton from "../BackButton.jsx";
import Spinner from "../Spinner.jsx";
import  { format } from 'date-fns';
import {url} from '../../constant/config.js';

const ShowSingleProduct = () => {

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [expireDate,setExpireDate] = useState(new Date());
    const [manufactureDate,setManufactureDate] = useState(new Date());
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0)
    const [disPrice,setDisPrice] = useState(0)
    const [imageUrl,setImageUrl] = useState('')
    const [loading,setLoading] = useState(false);
    const [ingredients, setIngredients] = useState('');
    const {id} = useParams()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${url}/products/${id}`)
            .then((res) => {
                setName(res.data.name);
                setDescription(res.data.description);
                setIngredients(res.data.ingredients);
                setExpireDate(res.data.expireDate);
                setManufactureDate(res.data.manufactureDate);
                setPrice(res.data.price);
                setDiscount(res.data.discount)
                setDisPrice(res.data.disPrice);
                setImageUrl(res.data.imageUrl);

                setLoading(false)
            })
            .catch((error) => {

                setLoading(false)
                alert('An error happened. Please Check console')
                console.log(error)
            })
    }, [id])


    return(
        <div>
            <BackButton/>
            {loading ? <Spinner/> : ''}
            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <h3 className='text-center p-5'>{name}</h3>
                <div style={{display:'flex', justifyContent: 'center'}}>
                    <div style={{width: '30vw'}}>
                        <img
                            src={`${url}/images/${imageUrl}`}
                            className="img-fluid rounded d-block mx-auto" alt="productImage"/>
                    </div>
                </div>
                <div className='mb-3 p-5'>
                    <h3 className='text-center'>{description}</h3>
                </div>

                <div className='mb-3 p-2'>
                    <h3>ingredients</h3>
                    <p className='fs-5'>{ingredients}</p>
                </div>

                <div className='mb-3 p-2'>
                    <h4>How to prepare?</h4>
                    <ol>
                        <li>Heat oil in a pan</li>
                        <li>fry Papadam until puffed and crisp (30 seconds in microwave or bake at 350°F for 3-5
                            minutes)
                        </li>
                        <li>Enjoy!</li>
                    </ol>
                </div>

                <div className='mb-3 p-2'>
                    <h4>Manufacture Date</h4>
                    <div style={{color: 'blue', fontWeight: 'bold'}}>{format(manufactureDate, 'yyyy-MM-dd')}</div>
                </div>

                <div className='mb-3 p-2'>
                    <h4>Expiry Dates</h4>
                    <div className='zoom-in-out-box'>{format(expireDate, 'yyyy-MM-dd')}</div>
                </div>

                <div className='mb-3 p-2'>
                    <h4>Price</h4>
                    {discount === 0 ? (
                        <div>{disPrice}</div>
                    ) : (
                        <div>
                            <div className='text-decoration-line-through'>RS.{price}</div>
                            <div className='d-flex'>
                                <div>RS.{disPrice} /=</div>
                                <div className='text-danger'>({discount}% discount added)</div>
                            </div>
                        </div>

                    )}
                </div>

            </div>
        </div>

    );
}

export default ShowSingleProduct;