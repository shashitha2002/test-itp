import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {enqueueSnackbar} from "notistack";

const DeleteStaff = () => {

    const [name,setName] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`http://localhost:3500/salary/staff/${id}`)
            .then((res)=>{
                setName(res.data.staffName)
            })
            .catch((e)=>{
                console.log(e);
            })
    }, []);

    const handleStaffDelete = () => {
        axios
            .delete(`http://localhost:3500/salary/staff/delete/${id}`)
            .then(() => {

                enqueueSnackbar('staff is Deleted successfully',{variant:'success'})

            })
            .catch((error) => {

                enqueueSnackbar('Error',{variant:'error'})
                console.log(error)
            })
            .finally( () => {
                navigate('/staff')
            })
    }

    return (
        <div className="d-flex flex-column bg-secondary-subtle m-xl-5 p-lg-5 justify-content-center align-items-center">
            <h3 className=' p-4 text-danger'>Are you sure you want to delete this product?</h3>
            <h6 className=' p-4'>Staff member : {name}</h6>

            <div className='d-flex gap-5'>
                <button type="button" className="btn btn-outline-danger" onClick={handleStaffDelete}>Yes Delete it</button>
                <Link to={'/staff'}>
                    <button type="button" className="btn btn-outline-secondary">Cancel</button>
                </Link>
            </div>
        </div>
    )
}

export default DeleteStaff;