import React, {useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import BackButton from "../Components/BackButton.jsx";
import Spinner from "../Components/Spinner.jsx";
import {url} from '../constant/config.js';

const DeleteOrder = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleDelete = () => {
        setLoading(true);
        axios
            .delete(`${url}/orders/delete/${id}`)
            .then(() => {
                setLoading(false)
                enqueueSnackbar('order is Deleted successfully',{variant:'success'})

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
        <div>
            <div>
                <BackButton/>
            </div>
            {loading ? <Spinner/> : ''}
            <div className="d-flex flex-column bg-secondary-subtle m-xl-5 p-lg-5 justify-content-center align-items-center">
                <h3 className=' p-4 text-danger'>Are you sure you want to delete this Order?</h3>
                <h6 className=' p-4'>order : {id}</h6>

                <div className='d-flex gap-5'>
                    <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Yes Delete it</button>
                    <Link to={'/orders'}>
                        <button type="button" className="btn btn-outline-secondary">Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default DeleteOrder;

