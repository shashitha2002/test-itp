import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateService () {
    const [staffId, setStaffId] = useState('');
    const [month, setMonth] = useState('');
    const [workingHours, setWorkingHours] = useState(0);
    const [OTHours, setOTHours] = useState(0);
    const [workingSalary, setWorkingSalary] = useState(0);
    const [OTSalary, setOTSalary] = useState(0);

    const navigate = useNavigate();

    const handleSubmit = () => {
        const data = {
            staffId,
            month,
            workingHours,
            OTHours,
            workingSalary,
            OTSalary
        };

        axios.post('http://localhost:3500/salary', data)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                console.error('Error adding salary:', error);
            });
    }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <Link to="/" className='text-info'>Home</Link>
                    <h2>Add Salary</h2>
                    <div className='mb-2'>
                        <label>Staff Id</label>
                        <input type="text" placeholder='Enter Staff Id' className='form-control'
                            value={staffId} onChange={(e) => setStaffId(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Month</label>
                        <input type="text" placeholder='Enter Month' className='form-control'
                            value={month} onChange={(e) => setMonth(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Working Hours</label>
                        <input type="number" placeholder='Enter Working Hours' className='form-control'
                            value={workingHours} onChange={(e) => setWorkingHours(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>OT Hours</label>
                        <input type="number" placeholder='Enter Over Time Hours' className='form-control'
                            value={OTHours} onChange={(e) => setOTHours(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Working Salary</label>
                        <input type="number" placeholder='Enter Working Salary' className='form-control'
                            value={workingSalary} onChange={(e) => setWorkingSalary(e.target.value)} />
                    </div>
                    <div className='mb-2'>
                        <label>Over Time Salary</label>
                        <input type="number" placeholder='Enter OT Salary' className='form-control'
                            value={OTSalary} onChange={(e) => setOTSalary(e.target.value)} />
                    </div>
                    {/* <div className='mb-2'>
                        <label>Total Salary</label>
                        <input type="number" placeholder='Enter Total Salary' className='form-control'
                            value={totalSalary} onChange={(e) => setTotalSalary(e.target.value)} />
                    </div> */}
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateService;
