import React, { useState, useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Redeem from "../../components/loyaltydbComp/redeem";
import Earn from "../../components/loyaltydbComp/earn";
import Donation from "../../components/loyaltydbComp/donation";
import Footer from "../../components/Home/footer.jsx";
import LoyaltyBanner from "../../components/loyaltydbComp/banner.jsx";
import axios from "axios";
import Reward from "../../images/rewards.gif";
import "./styles.css";

export default function LoyaltyDB() {

    //get user details
    const [userDetails, setUserDetails] = useState({});
    const uid = localStorage.getItem("username");
  
    const loadUserData = async () => {
      axios({
        method: "post",
        url: "http://localhost:8080/api/get-user-details",
        data: {
          username: uid,
        },
      }).then((data) => {
        console.log(data.data);
        setUserDetails(data.data);
      });
    };
  
    useEffect(() => {
      loadUserData();
    }, []);
  return (
    <div>
      <div className="banner">
        <LoyaltyBanner />
      </div>
      <div className="reward_maindiv">
        <div className="reward_div">
          <div className="banner_down">
            <h2 className="person_name">Hi {userDetails.username}</h2>
            <div>
              <img className="rewardgif" src={Reward} alt="" />
            </div>
            <h5 className="rewardtext">Available Points: {userDetails.userPoints}</h5>
          </div>
          <div className="tab_div">
            <Tabs
              defaultActiveKey="redeem"
              id="fill-tab-example"
              className="mb-3 tab_div"
              fill
            >
              <Tab eventKey="earn" title="Earn">
                <Earn />
              </Tab>
              <Tab eventKey="redeem" title="Redeem">
                <Redeem />
              </Tab>
              <Tab eventKey="donate" title="Donate">
                <Donation />
              </Tab>
              {/* <Tab eventKey="vouchers" title="My Vouchers">
                <Redeem />
              </Tab> */}
            </Tabs>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
