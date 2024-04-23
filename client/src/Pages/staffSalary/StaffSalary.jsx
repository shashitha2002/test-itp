import axios from 'axios';
import React, { useState } from 'react'

function StaffSalary() {
    const [staff,setStaff] = useState([]);

    const getStaff = async()=>{
        await axios.get("http://localhost:3500/")
        .then((res)=>{
            setStaff(res.data);
        })
    }

  return (
    <div>
        <table className="table table-striped table-hover border">
            <thead>
            <tr>
                <th className='text-center'>No</th>
                <th className='text-center'>Name</th>
                <th className='text-center'>Description</th>
                <th className='text-center'>Price</th>
                <th className='text-center'>Actions</th>

            </tr>
            </thead>
            <tbody>
            {products.filter((product) => {
                return search.toLowerCase() === '' ? product : product.name.toLowerCase().includes(search);
            }).map((product, index) => (
                <tr key={product._id}>
                    <td className='text-center'>{index + 1}</td>
                    <td className='text-center'>
                        <div className='d-flex flex-row gap-3 justify-content-center'>
                            {product.name}

                        <Link to={`/products/show/${product._id}`}>
                           <i className="bi bi-info-circle"></i>
                        </Link>

                        </div>
                    </td>
                    <td className='text-center'>{product.description}</td>
                    <td className='text-center'>Rs.{product.disPrice} /=</td>
                    <td className='text-center'>
                        <div className='d-flex flex-row gap-3 justify-content-center'>

                            <Link to={`/products/edit/${product._id}`}>
                                <button type="button" className="btn btn-success"><i
                                    className="bi bi-pencil-square"> Edit</i>
                                </button>
                            </Link>

                            <Link to={`/products/delete/${product._id}`}>
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