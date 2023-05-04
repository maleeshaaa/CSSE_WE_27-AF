import React from "react";
import Navbar from "../../components/navbar.jsx";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Inquaries from "../../components/Admin/Inquaries.jsx"
import Packages from "../../components/Admin/Packages.jsx"
import Requests from "../../components/Admin/Requests.jsx"
import Vouchers from "../../components/Admin/Vouchers.jsx"
import Footer from "../../components/Home/footer.jsx"
import "./travel-style.css"

export default function TravelPlan() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="heading">
          <h2>Hello Admin</h2>
          <p>Welcome to your Dashboard</p>
        </div>
      </div>
      <div className="side-nav-container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="tab-board">
            <Col>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="nav-item">
                  <Nav.Link className="nav-link" eventKey="first">
                    Requests
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="second">
                    Packages
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="third">
                    Inquiries
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="fourth">
                    Vouchers
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="tab-content">
                <Tab.Pane eventKey="first">
                  <Requests />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Packages />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Inquaries />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Vouchers />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
      <Footer />
    </div>
  );
}
