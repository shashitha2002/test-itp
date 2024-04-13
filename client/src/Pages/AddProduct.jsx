
import React, {useState} from "react";
import BackButton from "../Components/BackButton.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {enqueueSnackbar} from "notistack";
const AddProduct = () => {

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [expireDate,setExpireDate] = useState(new Date());
    const [manufactureDate,setManufactureDate] = useState(new Date());
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    const [disPrice,setDisPrice] = useState(0);
    const [imageUrl,setImageUrl] = useState('');
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState('');
    const [imagePreview, setImagePreview] = useState(null);

    const handleAddProduct = () => {

        setDisPrice(price)
        setDiscount(0)

        const formData = new FormData();
        formData.append('imageUrl', imageUrl);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('ingredients', ingredients);
        formData.append('expireDate', expireDate);
        formData.append('manufactureDate', manufactureDate);
        formData.append('price', price);
        formData.append('discount', discount);
        formData.append('disPrice', disPrice);

        console.log(formData);
        console.log(imageUrl)
        setLoading(true);
        axios
            .post('http://localhost:3500/products',formData)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Product Created successfully', {variant: 'success'});
                navigate('/');
            })
            .catch((error) => {
                console.error(error.response);
                setLoading(false);
                enqueueSnackbar('Error',{variant:'error'});
                console.log(error);
            })

    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageUrl(file); // Save the file object to imageUrl state
        setImagePreview(URL.createObjectURL(file)); // Create object URL for preview
    };

    return(
        <div className=''>

            <div>
                <BackButton destination={'/'}/>
                <h1 className='text-center'>Add New Product</h1>
            </div>

            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className="mb-3">
                    <label htmlFor="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName"
                           placeholder="Enter the Product Name Here" onChange={(e) => {
                        setName(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productDescription" className="form-label">Description</label>
                    <input type="text" className="form-control" id="productDescription"
                           placeholder="Enter the Product Description Here" onChange={(e) => {
                        setDescription(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productIngredients" className="form-label">Ingredients</label>
                    <input type="text" className="form-control" id="productIngredients"
                           placeholder='Mention Ingredients here. Use "," to enter multiple inputs' onChange={(e) => {
                        setIngredients(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                            <input type="date" className="form-control" id="expiryDate"
                                   placeholder="Expiry Date" aria-label="Expiry Date" onChange={(e) => {
                                setExpireDate(new Date(e.target.value))
                            }}/>
                        </div>
                        <div className="col">
                            <label htmlFor="manufactureDate" className="form-label">Manufacture Date</label>
                            <input type="date" className="form-control" id="manufactureDate"
                                   placeholder="Manufacture Date" aria-label="Manufacture Date"
                                   onChange={(e) => {
                                       setManufactureDate(new Date(e.target.value))
                                   }}/>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="productPrice" className="form-label">Price</label>
                    <input type="number" className="form-control" id="productPrice"
                           placeholder='Mention the Price' onChange={(e) => {
                        setPrice(e.target.value)
                    }}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="productImage" className="form-label">Image</label>
                    <input type="file" className="form-control" id="productImage"
                           aria-describedby="emailHelp" onChange={handleImageChange} name="image"/>
                </div>
                <div style={{margin: '10px 0px', display: 'flex', justifyContent: 'center'}}>
                    {imagePreview && <img style={{ width: '15vw', borderRadius: '10px' }} alt="preview image" src={imagePreview} />}
                </div>

                <button type="submit" className="border border-0 btn btn-success" onClick={handleAddProduct}>Add
                </button>
            </div>

        </div>
    )
}

export default AddProduct;
