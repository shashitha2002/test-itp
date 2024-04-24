import React, {useState} from "react";
import BackButton from "../../Components/BackButton.jsx";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
import {useNavigate} from "react-router-dom";


const CreateStaff = () => {

    const [staffName,setStaffName] = useState('')
    const [NIC,setNIC] = useState('')
    const [birthday,setBirthDay] = useState(new Date());
    const [experience,setExperience] = useState(0);
    const navigate = useNavigate();
    const handleAddStaff = async () => {

        const data = {
            staffName,
            NIC,
            birthday,
            experience
        }

        await axios.post('http://localhost:3500/salary/addStaff',data)
            .then(() => {
                enqueueSnackbar('Staff Member Added successfully', {variant: 'success'});
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
                <h1 className='text-center'>Add Staff Member</h1>
            </div>

            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Staff Name</label>
                    <input type="text" className="form-control" id="productName"
                           placeholder="Enter the Staff Name Here" onChange={(e) => {
                        setStaffName(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">NIC</label>
                    <input type="text" className="form-control" id="productDescription"
                           placeholder="Enter Staff member's NIC" onChange={(e) => {
                        setNIC(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productIngredients" className="form-label">Birth Day</label>
                    <input type="date" className="form-control" id="productIngredients"
                            onChange={(e) => {
                        setBirthDay(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">experience</label>
                    <input type="number" className="form-control" id="productPrice"
                           placeholder="ention the staff member's Experience" onChange={(e) => {
                        setExperience(e.target.value)
                    }}/>
                </div>

                <button type="submit" className="border border-0 btn btn-success" onClick={handleAddStaff}>Add
                </button>
            </div>

        </div>
    )
}

export default CreateStaff;