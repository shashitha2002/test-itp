import React from 'react';

function ContactUs() {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" style={{backgroundImage: "url('https://wallpaperaccess.com/full/2489630.jpg')", backgroundSize: 'cover'}}>
      <div className="container bg-dark text-white p-3" style={{ width: '75%' }}>
        <h1>Contact Us</h1>
        <p>Feel free to reach out to us using the contact information below:</p>
        <ul>
          <li>Email: info@janathapapadam.com</li>
          <li>Phone: +1234567890</li>
          <li>Address: 123 Main Street, City, Country</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactUs;
