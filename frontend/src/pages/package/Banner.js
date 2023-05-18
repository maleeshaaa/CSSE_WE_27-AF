import React from "react";

import "./styles.css";

export default function BannerComponent({heading, inquiryBanner}) {
  return (
    <div className="">
      <img src={inquiryBanner} alt="" style={{ width: "100%", height:'500px'}}/>
      <div className="centered_text text-light">{heading}</div>
    </div>
  );
}
