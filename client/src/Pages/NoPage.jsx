import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Orders from "./Orders.jsx";
import NavBar from "../Components/NavBar.jsx";
import Spinner from "../Components/Spinner.jsx";
import OrderTable from "../Components/OrderHome/OrderTable.jsx";

const NoPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/products')
    }, []);

    return (
        <>
        </>
    )
}

export default NoPage;