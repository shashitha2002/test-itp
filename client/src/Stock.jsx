/*import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function stock(){

    const[stock,setStock] = useState([])
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/stocks/all')
            .then((response) => {
                setStock(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);


    return (
        <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
            <Link to="/create"><button className="btn btn-success">Add +</button></Link>
                <table className='table'>
                    <thead>
                    <tr>
                        <th>product ID</th>
                        <th>Name</th>
                        <th>Quantity (Kg)</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stock.map((stock) => (
                        <tr key={stock._id}>
                            <td>{stock.productID}</td>
                            <td>{stock.productName}</td>
                            <td>{stock.quantity}</td>
                            <td>
                                <Link to={`/edit/${stock._id}`} className="btn btn-success">
                                    Update
                                </Link>
                                <Link to={`/delete/${stock._id}`}><button className='btn btn-danger'>Delete</button></Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default stock;*/

//add with search bar

/*import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Stock() {
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStock, setFilteredStock] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/stocks/all')
            .then((response) => {
                setStock(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = () => {
        const filteredItems = stock.filter((item) =>
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredStock(filteredItems);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        // If search query is empty, display all stock items
        if (event.target.value === "") {
            setFilteredStock(stock);
        }
    };

    const handleSearchButtonClick = () => {
        handleSearch();
    };

    return (
        
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by product name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <div className="input-group-append">
                        
                        <button
                            className="btn btn-dark"
                            type="button"
                            onClick={handleSearchButtonClick}
                        >
                            Search Stock
                        </button>
                    </div>
                </div>
                <Link to="/create">
                    <button className="btn btn-success">Add +</button>
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Quantity (Kg)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4">Loading...</td>
                            </tr>
                        ) : (
                            (searchQuery === "" ? stock : filteredStock).map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>
                                        {item.quantity < 5 ? (
                                            <span className="badge bg-warning">Low Stock: {item.quantity} Kg</span>
                                        ) : (
                                            `${item.quantity} Kg`
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/edit/${item._id}`}
                                            className="btn btn-success"
                                        >
                                            Update
                                        </Link>
                                        <Link
                                            to={`/delete/${item._id}`}
                                        >
                                            <button className="btn btn-danger ml-2">Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Stock;*/

/*--------------------------------import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Stock() {
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredStock, setFilteredStock] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/stocks/all')
            .then((response) => {
                setStock(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const handleSearch = () => {
        const filteredItems = stock.filter((item) =>
            item.productName.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredStock(filteredItems);
    };

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
        // If search query is empty, display all stock items
        if (event.target.value === "") {
            setFilteredStock(stock);
        }
    };

    const handleSearchButtonClick = () => {
        handleSearch();
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by product name"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-dark"
                            type="button"
                            onClick={handleSearchButtonClick}
                        >
                            Search Stock
                        </button>
                    </div>
                </div>
                <Link to="/create">
                    <button className="btn btn-success">Add +</button>
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Quantity (Kg)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="4">Loading...</td>
                            </tr>
                        ) : (
                            (searchQuery === "" ? stock : filteredStock).map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>
                                        {item.quantity >= 100 ? (
                                            <span className="badge bg-danger">Full ({item.quantity} Kg)</span>
                                        ) : item.quantity < 5 ? (
                                            <span className="badge bg-warning">Low Stock: {item.quantity} Kg</span>
                                        ) : (
                                            `${item.quantity} Kg`
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/edit/${item._id}`}
                                            className="btn btn-success"
                                        >
                                            Update
                                        </Link>
                                        <Link
                                            to={`/delete/${item._id}`}
                                        >
                                            <button className="btn btn-danger ml-2">Delete</button>
                                        </Link>
                                    </td>       
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <Link to="/create">
                <button className="btn btn-success">Generate Stock Report</button>
                </Link>
            </div>
        </div>
    );
}

export default Stock;----------------*/


/*

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';

function Stock() {
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/stocks/all')
            .then((response) => {
                setStock(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const filteredStock = stock.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const generateReport = () => {
        const pdf = new jsPDF();

        const fullStock = filteredStock.filter(item => item.quantity >= 100);
        const lowStock = filteredStock.filter(item => item.quantity < 5);
        const normalStock = filteredStock.filter(item => item.quantity >= 5 && item.quantity < 100);

        pdf.text(20,20, "Full Stock:");
        pdf.text(20,30, fullStock.map(item => `${item.productName}: ${item.quantity} Kg\n\n`).join("\n"));
        pdf.text(20,45, "Low Stock:");
        pdf.text(20,55, lowStock.map(item => `${item.productName}: ${item.quantity} Kg\n`).join("\n"));
        pdf.text(20,100, "Normal Stock:");
        pdf.text(20,110, normalStock.map(item => `${item.productName}: ${item.quantity} Kg\n`).join("\n"));

        pdf.save("Stock_report.pdf");
    }

    return (
        <div className="d-flex bg-primary justify-content-center align-items-center" style={{backgroundImage: "url('https://www.shipbob.com/au/wp-content/uploads/sites/33/2022/07/multichannel-inventory-management.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', height: '100vh'}}>
            <div className="w-75 bg-white rounded p-3" style={{marginTop:'30px', marginBottom:'30px'}}><br/>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search by product name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Link to="/create">
                    <button className="btn btn-success">Add +</button>
                </Link>
                <Link to="/contact">
                    <button className="btn btn-info ml-2" style={{marginLeft:'10px'}}>Contact Us</button>
                </Link>
                <Link to="/about">
                    <button className="btn btn-secondary ml-2" style={{marginLeft:'10px'}}>About Us</button>
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Quantity (Kg)</th>
                            <th>Expire Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        ) : (
                            filteredStock.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>
                                        {item.quantity >= 100 ? (
                                            <span className="badge bg-danger">Full ({item.quantity} Kg)</span>
                                        ) : item.quantity < 5 ? (
                                            <span className="badge bg-warning">Low Stock: {item.quantity} Kg</span>
                                        ) : (
                                            `${item.quantity} Kg`
                                        )}
                                    </td>
                                    <td>
                                        {item.expireDate ? (
                                            (() => {
                                                const expireDate = new Date(item.expireDate);
                                                if (expireDate < new Date()) {
                                                    return <span className="badge bg-danger">Expired</span>;
                                                } else {
                                                    return expireDate.toLocaleDateString();
                                                }
                                            })()
                                        ) : (
                                            <span className="text-danger">Not Entered</span>
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/edit/${item._id}`}
                                            className="btn btn-success"
                                        >
                                            Update
                                        </Link>
                                        <Link
                                            to={`/delete/${item._id}`}
                                        >
                                            <button className="btn btn-danger ml-2" style={{marginLeft:'10px'}}>Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={generateReport}>Generate Stock Report</button>
                </div>
                
            </div>
        </div>
    );
}

export default Stock;
*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jsPDF from 'jspdf';

function Stock() {
    const [stock, setStock] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/stocks/all')
            .then((response) => {
                setStock(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    const filteredStock = stock.filter((item) =>
        item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const generateReport = () => {
        const pdf = new jsPDF();

        const fullStock = filteredStock.filter(item => item.quantity >= 100);
        const lowStock = filteredStock.filter(item => item.quantity < 5);
        const normalStock = filteredStock.filter(item => item.quantity >= 5 && item.quantity < 100);

        pdf.text(20,20, "Full Stock:");
        pdf.text(20,30, fullStock.map(item => `${item.productName}: ${item.quantity} Kg\n\n`).join("\n"));
        pdf.text(20,45, "Low Stock:");
        pdf.text(20,55, lowStock.map(item => `${item.productName}: ${item.quantity} Kg\n`).join("\n"));
        pdf.text(20,100, "Normal Stock:");
        pdf.text(20,110, normalStock.map(item => `${item.productName}: ${item.quantity} Kg\n`).join("\n"));

        pdf.save("Stock_report.pdf");
    }

    return (
        <div className="d-flex bg-primary justify-content-center align-items-center" style={{backgroundImage: "url('https://www.shipbob.com/au/wp-content/uploads/sites/33/2022/07/multichannel-inventory-management.jpg')", backgroundSize: 'cover', backgroundAttachment: 'fixed', height: '100vh'}}>
            <div className="w-75 bg-white rounded p-3" style={{marginTop:'30px', marginBottom:'30px'}}>
                <div className="text-black">Hi Stock Manager</div> {/* Changed font color to black */}
                <br/>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search by product name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Link to="/create">
                    <button className="btn btn-success">Add +</button>
                </Link>
                <Link to="/contact">
                    <button className="btn btn-info ml-2" style={{marginLeft:'10px'}}>Contact Us</button>
                </Link>
                <Link to="/about">
                    <button className="btn btn-secondary ml-2" style={{marginLeft:'10px'}}>About Us</button>
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Quantity (Kg)</th>
                            <th>Expire Date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="5">Loading...</td>
                            </tr>
                        ) : (
                            filteredStock.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productID}</td>
                                    <td>{item.productName}</td>
                                    <td>
                                        {item.quantity >= 100 ? (
                                            <span className="badge bg-danger">Full ({item.quantity} Kg)</span>
                                        ) : item.quantity < 5 ? (
                                            <span className="badge bg-warning">Low Stock: {item.quantity} Kg</span>
                                        ) : (
                                            `${item.quantity} Kg`
                                        )}
                                    </td>
                                    <td>
                                        {item.expireDate ? (
                                            (() => {
                                                const expireDate = new Date(item.expireDate);
                                                if (expireDate < new Date()) {
                                                    return <span className="badge bg-danger">Expired</span>;
                                                } else {
                                                    return expireDate.toLocaleDateString();
                                                }
                                            })()
                                        ) : (
                                            <span className="text-danger">Not Entered</span>
                                        )}
                                    </td>
                                    <td>
                                        <Link
                                            to={`/edit/${item._id}`}
                                            className="btn btn-success"
                                        >
                                            Update
                                        </Link>
                                        <Link
                                            to={`/delete/${item._id}`}
                                        >
                                            <button className="btn btn-danger ml-2" style={{marginLeft:'10px'}}>Delete</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>

                <div className="input-group-append">
                    <button className="btn btn-dark" onClick={generateReport}>Generate Stock Report</button>
                </div>
                
            </div>
        </div>
    );
}

export default Stock;
