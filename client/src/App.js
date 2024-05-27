import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Headers/Headers';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Edit from './pages/Edit/Edit';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login'; 
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} /> {}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/userprofile/:id" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
