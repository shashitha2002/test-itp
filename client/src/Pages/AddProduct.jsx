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

    const handleAddProduct = () => {

        setDisPrice(price)
        setDiscount(0)
        const data = {
            name,
            description,
            ingredients,
            expireDate,
            manufactureDate,
            price,
            discount,
            disPrice,
            imageUrl
        }
        console.log(data)
        setLoading(true);
        axios
            .post('http://localhost:3500/products/add',data)
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

    return(
        <div className=''>

            <div>
                <BackButton destination={'/'}/>
                <h1 className='text-center'>Add New Product</h1>
            </div>

            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Enter the Product Name Here" onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Description</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Enter the Product Description Here" onChange={(e)=>{setDescription(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">ingredients</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder='Mention Ingredients here. use "," to enter multiple inputs' onChange={(e)=>{setIngredients(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <div className="row">
                        <div className="col">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Expiry Date</label>
                            <input type="date" className="form-control" placeholder="First name"
                                   aria-label="First name" onChange={(e)=>{setExpireDate(new Date(e.target.value))
                            }}/>
                        </div>
                        <div className="col">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Manufacture Date</label>
                            <input type="date" className="form-control" placeholder="Last name" aria-label="Last name" onChange={(e)=>{setManufactureDate(new Date(e.target.value)) }}/>
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Price</label>
                    <input type="number" className="form-control" id="formGroupExampleInput2"
                           placeholder='Mention the Price' onChange={(e)=>{setPrice(e.target.value)}}/>
                </div>

                <div className="mb-3">
                    <label htmlFor="formGroupExampleInput2" className="form-label">Image</label>
                    <input type="text" className="form-control"
                           aria-describedby="emailHelp" onChange={(e) => setImageUrl(e.target.value)}/>
                </div>

                <button type="submit" className="border border-0 btn btn-success" onClick={handleAddProduct}>Add
                </button>

            </div>
        </div>
    )
}

export default AddProduct;