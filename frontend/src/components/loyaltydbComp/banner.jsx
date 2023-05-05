import React from "react";
import Banner from "../../images/loyalty.png";
import "./styles.css";

export default function LoyaltyBanner() {
  return (
    <div>
      <img src={Banner} alt="" />
      <div className="centered_text">Loyalty Program</div>
      
    </div>
  );
}
