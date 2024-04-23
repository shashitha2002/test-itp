/*import React, { useState,useEffect } from "react";


function Salary()
{
    const [Salary,setSalary] = useState([{
        staffId:"001",month:"Feb",workingHours:10 , OTHours:15 , workingSalary : 40000, OTSalary:10000 , totalSalary:50000
    }])
    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
            <table className='table'>
          <thead>
            <tr>
              <th>staffId</th>
              <th>month</th>
              <th>workingHours</th>
              <th>OTHours</th>
              <th>workingSalary</th>
              <th>OTSalary</th>
              <th>totalSalary</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
                {
                    Salary.map((Salary)=>{
                        <tr>
                            <td>{Salary.staffId}</td>
                            <td>{Salary.month}</td>
                            <td>{Salary.workingHours}</td>
                            <td>{Salary.OTHours}</td>
                            <td>{Salary.workingSalary}</td>
                            <td>{Salary.OTSalary}</td>
                            <td>{Salary.totalSalary}</td>

                        </tr>
                    })
                }

            </tbody>
          </table>

            </div>
        </div>
    )
}

export default Salary; */


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Salary() {
    const [salary,setSalary] = useState([])

    // fetch slary dataa from backend
    const getSalaryDetails=()=>{
        axios.get("http://localhost:3500/salary")
        .then((res)=>{
            setSalary(res.data);
            console.log(res.data);
        })
    }

    useEffect(()=>{
        getSalaryDetails();
    },[]);

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-75 bg-white rounded p-3'>
                <Link to="/salary/add"><button className="btn btn-success">Add +</button></Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>StaffId</th>
                            <th>month</th>
                            <th>workingHours</th>
                            <th>OTHours</th>
                            <th>workingSalary</th>
                            <th>OTSalary</th>
                            <th>totalSalary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {salary.map((salaryItem, index) => (
                            <tr key={index}>
                                <td>{salaryItem.staffId}</td>
                                <td>{salaryItem.month}</td>
                                <td>{salaryItem.workingHours}</td>
                                <td>{salaryItem.OTHours}</td>
                                <td>{salaryItem.workingSalary}</td>
                                <td>{salaryItem.OTSalary}</td>
                                <td>{salaryItem.totalSalary}</td>
                                <td>
                                <Link to="/update"><button className="btn btn-success">Update</button></Link>
                                    {<button>Delete</button>}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Salary;
