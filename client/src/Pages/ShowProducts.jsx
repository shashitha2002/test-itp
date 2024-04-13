import React from 'react';
import {useState,useEffect} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import Spinner from "../Components/Spinner.jsx";
import NavBar from "../Components/NavBar.jsx";
import ProductTable from "../Components/ProductHome/ProductTable.jsx";
import ProductCard from "../Components/ProductHome/ProductCard.jsx";

const ShowProducts = () => {
    const[products,setProducts] = useState([]);
    const [loading,setLoading] =useState(false);
    const [showType,setShowType] = useState('table')
    const [search,setSearch] = useState('')

    useEffect(() => {
        setLoading(true);
        setTimeout(()=> {
            axios
                .get('http://localhost:3500/products')
                .then((response) => {
                    setProducts(response.data.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log(error);
                    setLoading(false);
                })
        },1000)
    }, []);


    return (
        <div className='p-4'>
            <div className='d-flex justify-content-center '><NavBar setSearch={setSearch} setShowType={setShowType}/></div>
            <div className='text-center p-4 h2'>Product List</div>


            {loading ? (
                <Spinner/>
            ) : (
                <ProductTable products={products} search={search}/>
            )}
        </div>

    );
}

export default ShowProducts;