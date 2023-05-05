import React from 'react'
import Navbar from "../../components/navbar.jsx";
import "./payment-style.css"

const payment = () => {
  return (
    <div>
      <Navbar />
      <div className='container-payment'>
        Payment
      </div>
    </div>
  );
}

export default payment