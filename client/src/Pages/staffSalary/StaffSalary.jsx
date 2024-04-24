import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function StaffSalary() {
    const [staff,setStaff] = useState([]);

    const getStaff = async()=>{
        await axios.get("http://localhost:3500/salary/staff")
        .then((res)=>{
            setStaff(res.data);
        })
        .catch((e)=>{
            console.log(e);
        })
    }

    useEffect(()=>{
        getStaff();
    },[]);

  return (
    <div>
        <table className="table table-striped table-hover border">
            <thead>
            <tr>
                <th className='text-center'>No</th>
                <th className='text-center'>Name</th>
                <th className='text-center'>NIC</th>
                <th className='text-center'>Birth day</th>
                <th className='text-center'>Experience</th>

            </tr>
            </thead>
            <tbody>
            {staff.map((staff, index) => (
                <tr key={staff._id}>
                    <td className='text-center'>{index + 1}</td>
                    <td className='text-center'>

                            {staff.staffName}
                        
                    </td>
                    <td className='text-center'>{staff.NIC}</td>
                    <td className='text-center'>{staff.birthday}</td>
                    <td className='text-center'>{staff.experience}</td>
                    <td className='text-center'>
                        <div className='d-flex flex-row gap-3 justify-content-center'>

                            <Link to={`/staff/view/${staff._id}`}>
                                <button type="button" className="btn btn-link">
                                     View
                                </button>
                            </Link>

                            <Link to={`/staff/edit/${staff._id}`}>
                                <button type="button" className="btn btn-success"><i
                                    className="bi bi-pencil-square"> Edit</i>
                                </button>
                            </Link>

                            <Link to={`/staff/delete/${staff._id}`}>
                                <button type="button" className="btn btn-danger">
                                    <i className="bi bi-trash3-fill"> Delete</i>
                                </button>
                            </Link>

                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default StaffSalary