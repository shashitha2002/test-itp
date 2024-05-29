import React, {useEffect, useState} from "react";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import {Link, useParams} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {url} from '../constant/config.js';


const AddDiscount = () => {


    const[name,setName] = useState('');
    const [discount,setDiscount] = useState(0);
    const [loading,setLoading] =useState(false);
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${url}/products/${id}`)
            .then((res) => {
                setName(res.data.name);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);

    const handleDiscount = async () => {

        const data = {
            discount
        }

        setLoading(true);

        axios
            .put(`${url}/products/discount/${id}`,data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('discount added Successfully',{variant: 'success'})
                navigate('/');

            })
            .catch((error) => {
                setLoading(false);
                //alert('An error happened. Please Check console')
                enqueueSnackbar('Error',{variant:'error'});
                console.log(error);
            })

    }

    return (
        <div className="d-flex flex-column bg-secondary-subtle m-xl-5 p-lg-5 justify-content-center align-items-center">
            <h3 className=' p-4 text-danger'>Product : {name}</h3>
            <div className='justify-content-center align-items-center'>
                <input type="text" placeholder="Discount Percentage" aria-label="Username" onChange={(e) => setDiscount(e.target.value)}/> <i className="bi bi-percent"></i>
            </div>

            <div className='d-flex gap-5 p-4'>
            <button type="button" className="btn btn-outline-danger" onClick={handleDiscount}>Confirm</button>
                <Link to={'/'}>
                    <button type="button" className="btn btn-outline-secondary">Cancel</button>
                </Link>
            </div>
        </div>
    )

}

export default AddDiscount;