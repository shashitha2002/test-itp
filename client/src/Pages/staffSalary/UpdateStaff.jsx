import BackButton from "../../Components/BackButton.jsx";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";

const UpdateStaff = () => {

    const [staffName,setStaffName] = useState('')
    const [NIC,setNIC] = useState('')
    const [birthday,setBirthDay] = useState(new Date());
    const [experience,setExperience] = useState(0);
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3500/salary/staff/${id}`)
            .then((res) => {
                setStaffName(res.data.staffName)
                setNIC(res.data.NIC)
                setBirthDay(res.data.birthday.split('T')[0]);
                setExperience(res.data.experience)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id]);

    const handleUpdateStaff = async () => {

        if(!staffName || !NIC || !birthday || !experience){
            return enqueueSnackbar('All the fields required', {variant: 'error'});
        }

        const data = {
            staffName,
            NIC,
            birthday,
            experience
        }

        await axios.put(`http://localhost:3500/salary/staff/update/${id}`,data)
            .then(() => {
                enqueueSnackbar('Staff Member updated successfully', {variant: 'success'});
                navigate('/staff')
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div className=''>

            <div>
                <BackButton/>
                <h1 className='text-center'>Update Staff Member</h1>
            </div>

            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Staff Name</label>
                    <input type="text" className="form-control" value={staffName}
                           placeholder="Enter the Staff Name Here" onChange={(e) => {
                        setStaffName(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">NIC</label>
                    <input type="text" className="form-control"  value={NIC}
                           placeholder="Enter Staff member's NIC" onChange={(e) => {
                        setNIC(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Birth Day : </label>
                    <input type="date" className="form-control"
                           value={birthday}
                           onChange={(e) => {
                               setBirthDay(e.target.value)
                           }}
                           required/>
                </div>

                <div className="mb-3">
                    <label className="form-label">experience</label>
                    <input type="number" className="form-control" value={experience}
                           placeholder="ention the staff member's Experience" onChange={(e) => {
                        setExperience(e.target.value)
                    }}/>
                </div>

                <button type="submit" className="border border-0 btn btn-success" onClick={handleUpdateStaff} >Update staff
                </button>
            </div>

        </div>
    )
}

export default UpdateStaff;