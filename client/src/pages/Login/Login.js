import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
   
    if (formData.email === 'nishika@gmail.com' && formData.password === 'nis123') {
  
      navigate('/home');
    } else {
     
      alert('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mt-4">Login</h2>
      <Form className="mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
