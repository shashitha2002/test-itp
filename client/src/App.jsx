import React, {Component} from 'react';
import {Route,Routes} from "react-router-dom";
import ShowProducts from "./Pages/ShowProducts.jsx";
import ProductCard from "./Components/ProductHome/ProductCard.jsx";
import EditProduct from "./Pages/EditProduct.jsx";
import DeleteProduct from "./Pages/DeleteProduct.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import ShowSingleProduct from "./Components/ProductHome/ShowSingleProduct.jsx";
import AddDiscount from "./Pages/AddDiscount.jsx";
import Discount from "./Pages/Discount.jsx";
import Orders from "./Pages/Orders.jsx";
import OrderTable from "./Components/OrderHome/OrderTable.jsx";
import ShowSingleOrder from "./Components/OrderHome/ShowSingleOrder.jsx";
import EditOrder from "./Pages/EditOrder.jsx";
import DeleteOrder from "./Pages/DeleteOrder.jsx";
import NoPage from "./Pages/NoPage.jsx";
import ProductList from "./Pages/ProductList.jsx";
import Cart from "./Pages/Cart.jsx";
//import MyOrders from "./Pages/MyOrders.jsx";
import OrderReport from "./Pages/OrderReport.jsx";
import Salary from './Pages/staffSalary/Salary.jsx';
import CreateSalary from "./Pages/staffSalary/CreateSalary.jsx";
import StaffSalary from './Pages/staffSalary/StaffSalary.jsx';

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path='/products' element={<ShowProducts/>}/>
                <Route path="/card" element={<ProductCard/>} />
                <Route path='/table' element={<ShowProducts/>}/>
                <Route path='/products/edit/:id' element={<EditProduct/>}/>
                <Route path='/products/delete/:id' element={<DeleteProduct/>}/>
                <Route path='/products/add' element={<AddProduct/>}/>
                <Route path='/products/show/:id' element={<ShowSingleProduct/>}/>
                <Route path='/products/discount' element={<Discount/>}/>
                <Route path='/products/addDiscount/:id' element={<AddDiscount/>}/>
                <Route path='/orders' element={<Orders/>}></Route>
                <Route path='/orders/orderTable' element={<OrderTable/>}/>
                <Route path='/orders/show/:id' element={<ShowSingleOrder/>}/>
                <Route path='/orders/edit/:id' element={<EditOrder/>}/>
                <Route path='/orders/delete/:id' element={<DeleteOrder/>}/>
                <Route path='/productList' element={<ProductList/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path="*" element={<NoPage/>} />
                
                <Route path='/orderReport' element={<OrderReport/>}></Route>

                {/* salary routes */}
                <Route path='/salary' element={<Salary/>} />
                <Route path='/salary/editSalary' element={<Salary/>} />
                <Route path='/salary/add' element={<CreateSalary/>} />
                <Route path='/staff' element={<StaffSalary/>} />
            </Routes>

        );
    }
}

export default App;