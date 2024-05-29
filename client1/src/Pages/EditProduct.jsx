import React, {useState,useEffect} from 'react'
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import {enqueueSnackbar} from "notistack";
import Spinner from "../Components/Spinner.jsx";
import BackButton from "../Components/BackButton.jsx";
import {url} from '../constant/config.js';

const EditProduct = () => {

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [expireDate,setExpireDate] = useState(new Date());
    const [manufactureDate,setManufactureDate] = useState(new Date());
    const [price,setPrice] = useState(0)
    const [imageUrl,setImageUrl] = useState('')
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState('');
    const [discount, setDiscount] = useState('');
    const {id} = useParams()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`${url}/products/${id}`)
            .then((res) => {
                setName(res.data.name);
                setDescription(res.data.description);
                setIngredients(res.data.ingredients);
                setExpireDate(res.data.expireDate);
                setManufactureDate(res.data.manufactureDate);
                setPrice(res.data.price);
                setImageUrl(res.data.imageUrl);

                setDiscount(res.data.discount)
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                alert('An error happened. Please Check console')
                console.log(error)
            })
    }, [id])


    const handleEditProduct = async () => {
        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('imageUrl', imageUrl);
            formData.append('name', name);
            formData.append('description', description);
            formData.append('ingredients', ingredients);
            formData.append('expireDate', expireDate);
            formData.append('manufactureDate', manufactureDate);
            formData.append('price', price);
            formData.append('discount', discount);

            console.log(imageUrl)

            // Update the existing product with the new data
            await axios.put(`${url}/products/edit/${id}`, formData);

            setLoading(false);
            enqueueSnackbar('Product Updated Successfully', { variant: 'success' });
            navigate('/');
        } catch (error) {
            setLoading(false);
            enqueueSnackbar('Error', { variant: 'error' });
            console.log(error);
        }
    };

    return(
        <div>
            <div>
                <BackButton/>
                <h1 className='text-center'>Edit Product</h1>
            </div>
            {loading ? <Spinner/> : ''}
            <div className='border m-xxl-5 p-4 bg-dark bg-opacity-10'>
                    <div className="mb-3">
                        <label className="form-label">Product Name</label>
                        <input type="text" className="form-control"
                               aria-describedby="emailHelp" value={name}  onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Product Description</label>
                        <input type="text" className="form-control"
                               aria-describedby="emailHelp" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>

                <div className="mb-3">
                    <label className="form-label">Ingredients</label>
                            <input type="text" className="form-control"
                                   aria-describedby="emailHelp" value={ingredients} onChange={(e) => setIngredients(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Expiry Date</label>
                    <input type="text" className="form-control"
                           aria-describedby="emailHelp" value={expireDate}
                           onChange={(e) => setExpireDate(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Manufacture Date</label>
                        <input type="text" className="form-control"
                               aria-describedby="emailHelp" value={manufactureDate} onChange={(e) => setManufactureDate(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control"
                               aria-describedby="emailHelp" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Image Url</label>
                        <input type="file" className="form-control"
                               aria-describedby="emailHelp" onChange={(e) => setImageUrl(e.target.files[0])}/>
                    </div>

                    <button type="submit" className="border border-0 btn btn-success" onClick={handleEditProduct}>Submit</button>
            </div>

        </div>
    );
}

export default EditProduct;