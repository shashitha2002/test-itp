import React from "react";
const SingleProductCard = ({product}) => {
    return (
        <div key={product._id} className="card" style="width: 18rem;">
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{product.price}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
}

export default SingleProductCard;