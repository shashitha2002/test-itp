import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Stock from './Stock'
import CreateStock from "./CreateStock.jsx";
import UpdateStock from "./UpdateStock.jsx";
import DeleteProduct from './deletestock.jsx';
import AboutUs from './AboutUs.jsx'; // Import the AboutUs component
import ContactUs from './ContactUs.jsx' //import contact us 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

        <Routes>
          <Route path='/' element={<Stock/>}/>
          <Route path='/create' element={<CreateStock/>}/>
            <Route path='/edit/:id' element={<UpdateStock/>}/>
            <Route path='/delete/:id' element={<DeleteProduct/>}/>
            <Route path="/about" element={<AboutUs />} /> {/* Add route for AboutUs component */}
            <Route path="/contact" element={<ContactUs/>}/> {/* Add route for Contact us component */}
            

            
        </Routes>

    </div>
  )
}

export default App