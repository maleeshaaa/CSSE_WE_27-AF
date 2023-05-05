import React from "react";
import Navbar from "../../components/navbar.jsx";
import Reward from "../../images/reward.gif";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Redeem from "../../components/loyaltydbComp/redeem";
import Earn from "../../components/loyaltydbComp/earn";
import "./styles.css";

export default function LoyaltyDB() {
  return (
    <div>
      <Navbar />
      <div className="main_container">
        <div>
          <h2 className="person_name">Hi Amal</h2>
        </div>
        <div>
          <img className="rewardgif" src={Reward} alt="" />
          <h5 className="rewardtext">Available Points: 100</h5>
        </div>
      </div>
      <div className="tab_div">
        <Tabs
          defaultActiveKey="profile"
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
        </Tabs>
        <h5 className="instruct">CLICK ON A TAB</h5>
      </div>
    </div>
  );
}
