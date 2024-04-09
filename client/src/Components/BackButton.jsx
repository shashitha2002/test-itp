import React from "react";
import {Link} from "react-router-dom";

const BackButton = ({destination} = '/') => {
    return (

            <Link to={destination}>
                <i className="bi bi-arrow-left-short h1 text-primary-emphasis"></i>
            </Link>

    );
}

export default BackButton;