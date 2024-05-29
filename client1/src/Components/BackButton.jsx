import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <i className="bi bi-arrow-left-short h1 text-primary-emphasis" onClick={goBack}></i>
    );
};

export default BackButton;
