import React, {useEffect, useState} from "react";
import axios from "axios";

const EditOrderProducts = ({ product, onProductChange }) => {
    const [allProducts, setAllProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(product);

    useEffect(() => {
        axios
            .get(`http://localhost:3500/products/all`)
            .then((response) => {
                setAllProducts(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const handleProductChange = (e) => {
        const selectedProductId = e.target.value;
        setSelectedProduct(selectedProductId);
        onProductChange(selectedProductId);
    };

    return (
        <select className="form-select" aria-label="Default select example" value={selectedProduct} onChange={handleProductChange}>
            <option value="">Select a product</option>
            {allProducts.map((product) => (
                <option key={product._id} value={product._id}>
                    {product.name}
                </option>
            ))}
        </select>
    );
};

export default EditOrderProducts;



/*const EditOrderProducts = ({product}) => {

    const [allProducts,setAllProducts] = useState([]);
    const [productName,setProductName] = useState('');

    useEffect(() => {
        axios
            .get(`http://localhost:3500/products/${product}`)
            .then((response) => {
                setProductName(response.data.name)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [product]);

    useEffect(() => {
        axios
            .get('http://localhost:3500/products/all')
            .then((response) => {
                setAllProducts(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const filteredProducts = allProducts.filter((prod) => prod.name !== productName);

    return (
        <select className="form-select" aria-label="Default select example" value={productName}
                onChange={(e) => setProductName(e.target.value)}>
            <option value="">{productName}</option>
            {filteredProducts.map((product, index) => (
                <option key={index} value={product.name}>
                    {product.name}
                </option>
            ))}
        </select>

    )
}

export default EditOrderProducts;*/