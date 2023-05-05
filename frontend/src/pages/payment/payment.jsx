import React from 'react'
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/Home/footer.jsx";
import "./payment-style.css"

const payment = () => {
  return (
    <div>
      <Navbar />
      <div className="container-payment">Payment</div>
      <Footer />
    </div>
  );
}

export default payment