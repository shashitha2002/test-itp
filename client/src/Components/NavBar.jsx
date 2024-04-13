import React, {useState} from 'react';
import {Link,useNavigate} from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";



const NavBar = ({setSearch}) => {

    const [showType,setShowType] = useState('table');
    const navigate = useNavigate();

    return (
        // <div className=''>
        //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //         <div className="container-fluid">
        //
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
        //                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        //                     aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                     {/*<li className="nav-item">*/}
        //                     {/*    <a className="nav-link active" aria-current="page" href="#">Home</a>*/}
        //                     {/*</li>*/}
        //                     <Nav.Link as={Link} to="/">
        //                         Home
        //                     </Nav.Link>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href={'/products/add'}>Add a product</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href={'/products/Discount'}>Add a Discount</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href={'/orders'}>Orders</a>
        //                     </li>
        //                     <li className="nav-item">
        //                         <a className="nav-link" href={'/'}>Products</a>
        //                     </li>
        //                     <li className="nav-item dropdown">
        //                         <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
        //                            aria-expanded="false">
        //                             Mode
        //                         </a>
        //                         <ul className="dropdown-menu">
        //                             <li>
        //                                 <button className="dropdown-item" onClick={handleTableMode}>Table Mode</button>
        //                             </li>
        //                             <li>
        //                                 <button className="dropdown-item" onClick={handleCardMode}>Card Mode</button>
        //                             </li>
        //
        //                         </ul>
        //                     </li>
        //                 </ul>
        //                 <form className="d-flex" role="search">
        //                     <input className="form-control me-2" type="search" placeholder="Search"
        //                            aria-label="Search" onChange={ (e => setSearch(e.target.value))}/>
        //                 </form>
        //             </div>
        //         </div>
        //     </nav>
        //
        // </div>
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" activeKey={location.pathname}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/products/add">Add a product</Nav.Link>
                    <Nav.Link href="/products/Discount">Add a Discount</Nav.Link>
                    <Nav.Link href="/orders">Orders</Nav.Link>
                    <Nav.Link href="/products">Products</Nav.Link>
                </Nav>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search"
                           aria-label="Search" onChange={(e => setSearch(e.target.value))}/>
                </form>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default NavBar;
