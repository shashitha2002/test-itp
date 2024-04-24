import BackButton from "../../Components/BackButton.jsx";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const ViewStaff = () => {

    const [staffDetails,setStaffDetails] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3500/salary/staff/${id}`)
            .then((res) => {
                setStaffDetails(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <div className=''>

            <div>
                <BackButton/>
                <h1 className='text-center'>staff Details</h1>
                <div className='d-flex flex-column bg-secondary-subtle m-xl-5 p-lg-5 fs-5'>
                    <p>Staff ID : {staffDetails._id}</p>
                    <p>Staff Name : {staffDetails.staffName}</p>
                    <p>Staff NIC : {staffDetails.NIC}</p>
                    <p>Staff birthDay : {staffDetails.birthday}</p>
                    <p>Staff experience : {staffDetails.experience}</p>
                    <div/>
                </div>

            </div>
        </div>
    )
            }

 export default ViewStaff;