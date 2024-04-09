import React, {useState,useEffect} from 'react'
import axios from "axios";
import {useNavigate,useParams} from "react-router-dom";
import {enqueueSnackbar} from "notistack";
import Spinner from "../Components/Spinner.jsx";
import BackButton from "../Components/BackButton.jsx";

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
    const {id} = useParams()

    useEffect(() => {
        setLoading(true);
        axios
            .get(`http://localhost:3500/products/${id}`)
            .then((res) => {
                setName(res.data.name);
                setDescription(res.data.description);
                setIngredients(res.data.ingredients);
                setExpireDate(res.data.expireDate);
                setManufactureDate(res.data.manufactureDate);
                setPrice(res.data.price);
                setImageUrl(res.data.imageUrl);
                setLoading(false)
            })
            .catch((error) => {
                setLoading(false)
                alert('An error happened. Please Check console')
                console.log(error)
            })
    }, [id])


    const handleEditProduct = () => {

        const data = {
            name,
            description,
            ingredients,
            expireDate,
            manufactureDate,
            price,
            imageUrl,
        }

        setLoading(true);

        axios
            .put(`http://localhost:3500/products/edit/${id}`,data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('Product Updated Successfully',{variant: 'success'})
                navigate('/');

            })
            .catch((error) => {
                setLoading(false);
                //alert('An error happened. Please Check console')
                enqueueSnackbar('Error',{variant:'error'});
                console.log(error);
            })


    }

    return(
        <div>
            <div>
                <BackButton destination={'/'}/>
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
                        <input type="text" className="form-control"
                               aria-describedby="emailHelp" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}/>
                    </div>

                    <button type="submit" className="border border-0 btn btn-success" onClick={handleEditProduct}>Submit</button>
            </div>

        </div>
    );
}

export default EditProduct;