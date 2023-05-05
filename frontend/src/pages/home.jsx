import React from "react";

import HomeBanner from "../components/Home/banner.jsx";
import Navbar from "../components/navbar.jsx";
import Wrapper from "../components/Home/wrapper";
import Footer from "../components/Home/footer";

export default function Home() {
  return (
    <div>
      
      <Navbar />
        <HomeBanner />

        <Wrapper />
        <Footer />
     
    </div>
  );
}
