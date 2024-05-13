import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import Salary from "./Salary.jsx";

const UpdateSalary = () => {
    const [month, setMonth] = useState(0);
    const [workingHours, setWorkingHours] = useState(0);
    const [OTHours, setOTHours] = useState(0);
    const [workingSalary, setWorkingSalary] = useState(0);
    const [OTSalary, setOTSalary] = useState(0);
    const navigate = useNavigate();

    console.log(month, workingHours, OTHours, workingSalary);


    const {id} = useParams();




    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <Link to="/" className='text-info'>Home</Link>
                    <h2>Update Salary</h2>
                    <div className='mb-2'>
                        <label>Staff Id</label>
                        <input type="text" placeholder='Enter Staff Id' className='form-control'/>
                    </div>
                    <div className='mb-2'>
                        <label>Month</label>
                        <input type="text" placeholder='Enter Month' className='form-control'
                                />
                    </div>
                    <div className='mb-2'>
                        <label>Working Hours</label>
                        <input type="number" placeholder='Enter Working Hours' className='form-control'
                        value={workingHours}        />
                    </div>
                    <div className='mb-2'>
                        <label>OT Hours</label>
                        <input type="number" placeholder='Enter Over Time Hours' className='form-control'
                                />
                    </div>
                    <div className='mb-2'>
                        <label>Working Salary</label>
                        <input type="number" placeholder='Enter Working Salary' className='form-control'
                               />
                    </div>
                    <div className='mb-2'>
                        <label>Over Time Salary</label>
                        <input type="number" placeholder='Enter OT Salary' className='form-control'
                                />
                    </div>
                    <button type="button" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}


export default UpdateSalary;
