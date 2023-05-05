import React from 'react'
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/Home/footer.jsx";
import Payment from "../../components/Payment/package-payment.jsx"
import "./payment.css"

const payment = () => {
  return (
    <div>
      <Navbar />
      <div className="container-payment">
        {/* Payment Form */}
        <div className="payment-form">
          <Payment/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default payment