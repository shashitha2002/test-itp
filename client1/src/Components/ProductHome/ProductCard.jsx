import SingleProductCard from "./SingleProductCard.jsx";
import NavBar from "../NavBar.jsx";

const ProductCard = ({ products }) => {
    console.log(products)
    return (
        <div className='p-4 bg-secondary-subtle'>
        <div className='d-flex justify-content-center '><NavBar/></div>

            {products && products.map((item) => (
                <SingleProductCard key={item._id} product={item}/>
            ))}
        </div>
    );
};

export default ProductCard;
