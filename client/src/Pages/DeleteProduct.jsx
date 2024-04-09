import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import BackButton from "../Components/BackButton.jsx";
import Spinner from "../Components/Spinner.jsx";
const DeleteProduct = () => {

    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();
    const [name,setName] = useState('');

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3500/products/${id}`)
            .then((res) => {
                setName(res.data.name);
            })
            .catch((error) => {
                setLoading(false)
                alert('An error happened. Please Check console')
                console.log(error)
            })
    }, [id])


    const handleDelete = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:3500/products/delete/${id}`)
            .then(() => {
                setLoading(false)
                enqueueSnackbar('Product is Deleted successfully',{variant:'success'})

            })
            .catch((error) => {
                setLoading(false);
                enqueueSnackbar('Error',{variant:'error'})
                console.log(error)
            })
            .finally( () => {
                navigate('/')
            })
    }

    return (

        <div className="d-flex flex-column bg-secondary-subtle m-xl-5 p-lg-5 justify-content-center align-items-center">
            <h3 className=' p-4 text-danger'>Are you sure you want to delete this product?</h3>
            <h6 className=' p-4'>Product : {name}</h6>

            <div className='d-flex gap-5'>
                <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Yes Delete it</button>
                <Link to={'/'}>
                    <button type="button" className="btn btn-outline-secondary">Cancel</button>
                </Link>
            </div>
        </div>
    );

}

export default DeleteProduct;